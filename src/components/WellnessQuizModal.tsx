import React, { useState } from 'react';

interface QuizProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDoctor: (doctorName: string) => void;
}

export const WellnessQuizModal: React.FC<QuizProps> = ({
  isOpen,
  onClose,
  onSelectDoctor,
}) => {
  const [q1, setQ1] = useState<string>('energy');
  const [q2, setQ2] = useState<string>('sleep');
  const [result, setResult] = useState<null | {
    score: number;
    title: string;
    rec: string;
    doctor: string;
  }>(null);

  if (!isOpen) return null;

  const calculateResults = () => {
    let score = 85;
    let rec = 'Surgical & Preventive Recovery';
    let doctor = 'Dr. Tena Johnson';

    if (q1 === 'stress') {
      score -= 15;
      rec = 'Cognitive & Neuro-Sync Protocol';
      doctor = 'Dr. Marcus Vance';
    } else if (q1 === 'recovery') {
      rec = 'Post-Operative Precision Program';
      doctor = 'Dr. Tena Johnson';
    }

    if (q2 === 'insomnia') {
      score -= 10;
    }

    setResult({
      score: Math.max(score, 60),
      title: 'Personalized Health Blueprint',
      rec,
      doctor,
    });
  };

  const handleReset = () => {
    setResult(null);
  };

  return (
    <div className="fixed inset-0 z-[150] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl relative">
        <button
          onClick={() => {
            handleReset();
            onClose();
          }}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-surface-container text-on-surface flex items-center justify-center text-sm"
        >
          ✕
        </button>

        <div className="flex items-center gap-2 mb-4">
          <span className="material-symbols-outlined text-primary text-xl">
            psychology
          </span>
          <h3 className="text-xl font-bold text-on-surface">AI Wellness Checkup</h3>
        </div>

        {!result ? (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-on-surface mb-2">
                1. What is your primary wellness priority today?
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2.5 p-3 rounded-xl border border-outline-variant text-xs cursor-pointer hover:bg-primary/5">
                  <input
                    type="radio"
                    name="q1"
                    checked={q1 === 'energy'}
                    onChange={() => setQ1('energy')}
                  />
                  <span>Surgical Consultation & Body Optimization</span>
                </label>
                <label className="flex items-center gap-2.5 p-3 rounded-xl border border-outline-variant text-xs cursor-pointer hover:bg-primary/5">
                  <input
                    type="radio"
                    name="q1"
                    checked={q1 === 'stress'}
                    onChange={() => setQ1('stress')}
                  />
                  <span>Stress Reduction & Focus (Cognitive)</span>
                </label>
                <label className="flex items-center gap-2.5 p-3 rounded-xl border border-outline-variant text-xs cursor-pointer hover:bg-primary/5">
                  <input
                    type="radio"
                    name="q1"
                    checked={q1 === 'recovery'}
                    onChange={() => setQ1('recovery')}
                  />
                  <span>Post-Surgical Recovery & Rehabilitation</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-on-surface mb-2">
                2. How has your sleep quality been over the past 2 weeks?
              </label>
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center gap-2 p-2.5 rounded-xl border border-outline-variant text-xs cursor-pointer hover:bg-primary/5">
                  <input
                    type="radio"
                    name="q2"
                    checked={q2 === 'sleep'}
                    onChange={() => setQ2('sleep')}
                  />
                  <span>Deep & Restful</span>
                </label>
                <label className="flex items-center gap-2 p-2.5 rounded-xl border border-outline-variant text-xs cursor-pointer hover:bg-primary/5">
                  <input
                    type="radio"
                    name="q2"
                    checked={q2 === 'insomnia'}
                    onChange={() => setQ2('insomnia')}
                  />
                  <span>Interrupted / Restless</span>
                </label>
              </div>
            </div>

            <button
              onClick={calculateResults}
              className="w-full mt-4 bg-primary text-white text-xs font-semibold py-3 rounded-full hover:bg-primary-container transition-colors shadow-md"
            >
              Analyze My Biometrics →
            </button>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary font-extrabold text-2xl flex items-center justify-center mx-auto">
              {result.score}%
            </div>

            <h4 className="text-lg font-bold text-on-surface">{result.title}</h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Based on your biometrics, we recommend starting the{' '}
              <strong className="text-primary">{result.rec}</strong> led by{' '}
              <strong className="text-on-surface">{result.doctor}</strong>.
            </p>

            <div className="pt-3 flex gap-2">
              <button
                onClick={handleReset}
                className="w-1/3 py-2.5 rounded-full border border-outline-variant text-xs font-semibold text-on-surface"
              >
                Retake
              </button>
              <button
                onClick={() => {
                  onSelectDoctor(result.doctor);
                  handleReset();
                  onClose();
                }}
                className="w-2/3 bg-primary text-white text-xs font-semibold py-2.5 rounded-full shadow-md"
              >
                Book with {result.doctor}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
