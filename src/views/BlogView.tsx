import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/mockData';
import { BlogPost } from '../types/suraksha';

export const BlogView: React.FC = () => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <span className="bg-rose-50 text-rose-600 border border-rose-200 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
          Health Insights
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-2">
          Suraksha Health Awareness Blog
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          Evidence-based diagnostic guidance written by senior medical pathologists.
        </p>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6 space-y-2">
                <div className="flex justify-between items-center text-[10px] font-bold text-slate-500">
                  <span className="bg-rose-50 text-rose-600 px-2.5 py-0.5 rounded-full uppercase">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 flex justify-between items-center border-t border-slate-100">
              <span className="text-[11px] font-bold text-slate-500">By {post.author}</span>
              <button
                onClick={() => setActivePost(post)}
                className="text-xs font-extrabold text-rose-600 hover:underline"
              >
                Read Article →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Reader Modal */}
      {activePost && (
        <div className="fixed inset-0 z-[160] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto space-y-4">
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-sm"
            >
              ✕
            </button>

            <span className="text-xs font-bold text-rose-600 uppercase bg-rose-50 px-3 py-1 rounded-full">
              {activePost.category} • {activePost.readTime}
            </span>

            <h2 className="text-2xl font-extrabold text-slate-900">{activePost.title}</h2>
            <p className="text-xs font-bold text-slate-500">
              Published by {activePost.author} on {activePost.date}
            </p>

            <img src={activePost.image} alt={activePost.title} className="w-full h-64 object-cover rounded-2xl" />

            <div className="text-xs text-slate-700 font-medium leading-relaxed space-y-3">
              <p>{activePost.content}</p>
              <p>
                Regular health checkups remain the single most effective way to catch sub-clinical biomarker changes before symptoms emerge. Talk to your consulting physician about including this screening during your annual checkup.
              </p>
            </div>

            <button
              onClick={() => setActivePost(null)}
              className="w-full bg-slate-900 text-white text-xs font-bold py-3 rounded-full"
            >
              Close Article
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
