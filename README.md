# 个人网站

这是我基于Next.js框架开发的个人网站项目。

## 使用的技术栈

- Next.js 15.1.4
- React 18
- TypeScript
- TailwindCSS

## 安装和运行

```bash
npm install
npm run dev
```

然后在浏览器中访问 http://localhost:3000

## 自定义说明

本网站主要通过修改 `src/app/utils/constantUtils.ts` 文件来自定义内容。

## 图片替换说明

需要替换以下图片文件：

1. `/public/images/your-logo.png` - 网站logo
2. `/public/images/profile.jpg` - 个人头像
3. `/public/images/project1-cover.jpg` - 项目1封面图
4. `/public/images/project1-pic.jpg` - 项目1详情图
5. `/public/images/project2-cover.jpg` - 项目2封面图
6. `/public/images/project2-pic.jpg` - 项目2详情图
7. `/public/images/project3-cover.jpg` - 项目3封面图
8. `/public/images/project3-pic.jpg` - 项目3详情图
9. `/public/images/social-banner.png` - 社交媒体分享图片

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
