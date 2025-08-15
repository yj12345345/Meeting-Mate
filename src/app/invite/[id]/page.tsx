'use client';

import { useState } from 'react';

type Props = { params: { id: string } };

export default function InvitePage({ params }: { params: { id: string } }) {
  const meetingId = params.id;

  // 날짜 여러 개
  const [dateInput, setDateInput] = useState<string>('');
  const [dates, setDates] = useState<string[]>([]);

  // 시간대
  const [startTime, setStartTime] = useState<string>('18:00');
  const [endTime, setEndTime] = useState<string>('20:00');

  // 선호 (간단 체크박스)
  const [foods, setFoods] = useState<string[]>([]);
  const [activities, setActivities] = useState<string[]>([]);

  const toggle = (arr: string[], v: string, setter: (s: string[]) => void) => {
    setter(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);
  };

  const addDate = () => {
    if (!dateInput) return;
    if (!dates.includes(dateInput)) setDates([...dates, dateInput].sort());
    setDateInput('');
  };

  const removeDate = (d: string) => setDates(dates.filter((x) => x !== d));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 간단 검증
    if (dates.length === 0) {
      alert('가능한 날짜를 최소 1개 이상 추가하세요.');
      return;
    }
    if (startTime >= endTime) {
      alert('시간 범위를 올바르게 설정해주세요. (시작 < 종료)');
      return;
    }

    const payload = {
      meetingId,
      availableDates: dates,                // ['2025-08-12', '2025-08-13', ...]
      timeRange: { start: startTime, end: endTime }, // 'HH:mm'
      preferences: {
        foods,                              // ['한식','카페',...]
        activities,                         // ['보드게임','산책',...]
      },
    };

    console.log('[INVITE_SUBMIT]', payload);
    alert('제출 완료! 콘솔을 확인하세요.');
  };

  return (
    <main className="mx-auto max-w-xl p-6">
      <h1 className="mb-2 text-2xl font-bold">참여자 설문</h1>
      <p className="mb-6 text-sm text-gray-600">
        meetingId: <span className="font-mono">{meetingId}</span>
      </p>

      <form onSubmit={onSubmit} className="space-y-8">
        {/* 날짜 선택 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold">가능한 날짜</h2>
          <div className="flex items-center gap-2">
            <input
              type="date"
              value={dateInput}
              onChange={(e) => setDateInput(e.target.value)}
              className="rounded border px-3 py-2"
            />
            <button
              type="button"
              onClick={addDate}
              className="rounded bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700"
            >
              추가
            </button>
          </div>
          {dates.length > 0 && (
            <ul className="mt-3 flex flex-wrap gap-2">
              {dates.map((d) => (
                <li
                  key={d}
                  className="flex items-center gap-2 rounded border px-2 py-1 text-sm"
                >
                  <span className="font-mono">{d}</span>
                  <button
                    type="button"
                    onClick={() => removeDate(d)}
                    className="text-red-600"
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* 시간대 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold">가능한 시간대</h2>
          <div className="flex items-center gap-3">
            <label className="text-sm">시작</label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="rounded border px-3 py-2"
            />
            <label className="text-sm">종료</label>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="rounded border px-3 py-2"
            />
          </div>
        </section>

        {/* 선호 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold">선호</h2>

          <p className="mb-2 text-sm font-medium">먹고 싶은 것</p>
          <div className="mb-4 flex flex-wrap gap-3 text-sm">
            {['한식', '일식', '중식', '양식', '카페', '술집'].map((f) => (
              <label key={f} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={foods.includes(f)}
                  onChange={() => toggle(foods, f, setFoods)}
                />
                <span>{f}</span>
              </label>
            ))}
          </div>

          <p className="mb-2 text-sm font-medium">하고 싶은 것</p>
          <div className="flex flex-wrap gap-3 text-sm">
            {['보드게임', '영화', '산책', '카페수다', '노래방'].map((a) => (
              <label key={a} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={activities.includes(a)}
                  onChange={() => toggle(activities, a, setActivities)}
                />
                <span>{a}</span>
              </label>
            ))}
          </div>
        </section>

        <div>
          <button
            type="submit"
            className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          >
            제출
          </button>
        </div>
      </form>
    </main>
  );
}