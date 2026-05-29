<template>
  <div class="min-h-screen bg-slate-950 flex flex-col">
    <AppNav />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
