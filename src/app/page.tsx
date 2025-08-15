'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateMeetingPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name.trim()) {
      setError('모임 이름을 입력해주세요.');
      return;
    }
    setSubmitting(true);

    // 임시 meetingId (DB 붙기 전)
    const id =
      typeof crypto !== 'undefined' && 'randomUUID' in crypto
        ? crypto.randomUUID()
        : Math.random().toString(36).slice(2, 10);

    console.log('[CREATE]', { name, desc });
    router.push(`/invite/${id}`);
  };

  return (
    <main className="mx-auto max-w-xl p-6">
      <h1 className="mb-4 text-2xl font-bold">모임 생성하기</h1>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block font-medium">모임 이름 *</label>
          <input
            className="w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="예: 팀 회식, 소개팅, 스터디"
          />
        </div>

        <div>
          <label className="mb-1 block font-medium">모임 설명</label>
          <textarea
            className="w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="모임의 목적/분위기를 간단히 적어주세요."
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-60"
        >
          {submitting ? '만드는 중…' : '다음 단계로 →'}
        </button>
      </form>
    </main>
  );
}