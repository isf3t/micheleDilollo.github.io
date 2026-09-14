/** @type {import('next').NextConfig} */
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const isRootUserSite = process.env.GITHUB_REPOSITORY?.toLowerCase().endsWith('/isf3t.github.io');
const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : '';
const basePath = isGitHubActions && !isRootUserSite && repoName ? `/${repoName}` : undefined;

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: basePath,
  trailingSlash: true,
};

export default nextConfig;
