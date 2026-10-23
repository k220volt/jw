import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://k220volt.github.io',
  base: '/jw',
  trailingSlash: 'never',
  build: {
    format: 'file'  // 빌드 시 폴더 형태가 아닌 .html 파일 형태로 생성
  }
});