import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  build: {
    format: 'file'  // 빌드 시 폴더 형태가 아닌 .html 파일 형태로 생성
  }
});