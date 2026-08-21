import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  build: {
    format: 'file' // 빌드 결과물을 folder/index.html 대신 filename.html 로 생성
  }
});