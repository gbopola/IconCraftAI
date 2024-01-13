import React from "react";

const Pricing = () => {
  return (
    <div class="sm:flex sm:flex-col sm:align-center p-10 mt-20">
      <div class="mt-12 space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 md:max-w-5xl md:mx-auto xl:grid-cols-3">
        <div class="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
          <div class="p-6">
            <h2 class="text-xl leading-6 font-bold text-slate-900">Starter</h2>
            <p class="mt-2 text-base text-slate-700 leading-tight">
              For new makers who want to fine-tune and test an idea.
            </p>
            <p class="mt-8">
              <span class="text-4xl font-bold text-slate-900 tracking-tighter">
                $0
              </span>

              <span class="text-base font-medium text-slate-500">/mo</span>
            </p>
            <a
              href="/sign-up"
              class="mt-8 block w-full bg-slate-900 rounded-md py-2 text-sm font-semibold text-white text-center"
            >
              Join as a Starter
            </a>
          </div>
          <div class="pt-6 pb-8 px-6">
            <h3 class="text-sm font-bold text-slate-900 tracking-wide uppercase">
              What's included
            </h3>
            <ul role="list" class="mt-4 space-y-3">
              <li class="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-shrink-0 h-5 w-5 text-green-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span class="text-base text-slate-700">
                  1 landing page included
                </span>
              </li>
              <li class="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-shrink-0 h-5 w-5 text-green-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span class="text-base text-slate-700">1,000 visits/mo</span>
              </li>
              <li class="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-shrink-0 h-5 w-5 text-green-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span class="text-base text-slate-700">
                  Access to all UI blocks
                </span>
              </li>
              <li class="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-shrink-0 h-5 w-5 text-green-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span class="text-base text-slate-700">
                  50 conversion actions included
                </span>
              </li>
              <li class="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-shrink-0 h-5 w-5 text-green-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span class="text-base text-slate-700">
                  5% payment commission
                </span>
              </li>
              <li class="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-shrink-0 h-5 w-5 text-green-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span class="text-base text-slate-700">
                  Real-time analytics
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
          <div class="p-6">
            <h2 class="text-xl leading-6 font-bold text-slate-900">Superior</h2>
            <p class="mt-2 text-base text-slate-700 leading-tight">
              For creators with multiple ideas who want to efficiently test and
              refine them.
            </p>
            <p class="mt-8">
              <span class="text-4xl font-bold text-slate-900 tracking-tighter">
                $8
              </span>

              <span class="text-base font-medium text-slate-500">/mo</span>
            </p>
            <a
              href="/sign-up"
              class="mt-8 block w-full bg-slate-900 rounded-md py-2 text-sm font-semibold text-white text-center"
            >
              Join as a Superior
            </a>
          </div>
          <div class="pt-6 pb-8 px-6">
            <h3 class="text-sm font-bold text-slate-900 tracking-wide uppercase">
              What's included
            </h3>
            <ul role="list" class="mt-4 space-y-3">
              <li class="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-shrink-0 h-5 w-5 text-green-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span class="text-base text-slate-700">All Free features</span>
              </li>
              <li class="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-shrink-0 h-5 w-5 text-green-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span class="text-base text-slate-700">
                  5 landing pages included
                </span>
              </li>
              <li class="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-shrink-0 h-5 w-5 text-green-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span class="text-base text-slate-700">50,000 visits/mo</span>
              </li>
              <li class="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-shrink-0 h-5 w-5 text-green-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span class="text-base text-slate-700">
                  1,000 conversion actions included
                </span>
              </li>
              <li class="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-shrink-0 h-5 w-5 text-green-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span class="text-base text-slate-700">
                  1% payment commission
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
          <div class="p-6">
            <h2 class="text-xl leading-6 font-bold text-slate-900">Shipper</h2>
            <p class="mt-2 text-base text-slate-700 leading-tight">
              For productive shippers who want to work more efficiently.
            </p>
            <p class="mt-8">
              <span class="text-4xl font-bold text-slate-900 tracking-tighter">
                $15
              </span>

              <span class="text-base font-medium text-slate-500">/mo</span>
            </p>
            <a
              href="/sign-up"
              class="mt-8 block w-full bg-slate-900 rounded-md py-2 text-sm font-semibold text-white text-center"
            >
              Join as a Shipper
            </a>
          </div>
          <div class="pt-6 pb-8 px-6">
            <h3 class="text-sm font-bold text-slate-900 tracking-wide uppercase">
              What's included
            </h3>
            <ul role="list" class="mt-4 space-y-3">
              <li class="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-shrink-0 h-5 w-5 text-green-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span class="text-base text-slate-700">
                  All Standard features
                </span>
              </li>
              <li class="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-shrink-0 h-5 w-5 text-green-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span class="text-base text-slate-700">
                  20 landing pages included
                </span>
              </li>
              <li class="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-shrink-0 h-5 w-5 text-green-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span class="text-base text-slate-700">200,000 visits/mo</span>
              </li>
              <li class="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-shrink-0 h-5 w-5 text-green-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span class="text-base text-slate-700">
                  5,000 conversion actions included
                </span>
              </li>
              <li class="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-shrink-0 h-5 w-5 text-green-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span class="text-base text-slate-700">
                  No payment commission
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
