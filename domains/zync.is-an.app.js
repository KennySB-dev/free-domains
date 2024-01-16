addSubDomain({
  description: "Zync's Website",
  domain: 'is-an.app',
  subdomain: 'zync',
  owner: {
    repo: 'https://github.com/KennySB-dev/kennysb-dev.github.io',
    email: 'kenny@kenny.is-a.dev',
  },
  record: {
    CNAME: 'kenny.is-a.dev/zync',
  },
  proxy: false,
})
