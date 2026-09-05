# Cerynitius.github.io

Rick 的个人主页。Next.js 静态导出，GitHub Actions 自动部署到 GitHub Pages。

## 改内容

所有文字、链接、项目、联系方式都在 `app/content.ts`。头像换掉 `public/avatar.svg`，并把 `content.ts` 里 `OWNER.avatar` 改成新文件名。

## 本地运行

```bash
npm install
npm run dev
```

## 部署

1. 在 GitHub 新建仓库 `Cerynitius/Cerynitius.github.io`，把这个目录 push 到 `main`。
2. 仓库 Settings → Pages → Source 选 **GitHub Actions**。
3. 之后每次 push 到 `main` 都会自动构建并发布到 https://cerynitius.github.io。

自定义域名的话在 Settings → Pages 填域名，并在仓库根目录加一个 `CNAME` 文件写域名。
