function Error404() {
    return(
        <div>

<div class="bg-red-50 border-s-4 border-red-500 p-4 dark:bg-red-800/30 " role="alert">
  <div class="flex">
    <div class="flex-shrink-0">
      <span class="inline-flex justify-center items-center w-8 h-8 rounded-full border-4 border-red-100 bg-red-200 text-red-800 dark:border-red-900 dark:bg-red-800 dark:text-red-400">
        <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </span>
    </div>
    <div class="ms-3">
      <h3 class="text-gray-800 font-semibold dark:text-white">
        Error!
      </h3>
      <p class="text-sm text-gray-700 dark:text-gray-400">
        Your purchase has been declined.
      </p>
    </div>
  </div>
</div>
        </div>
    )
}

export default Error404