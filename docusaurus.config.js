module.exports = {

  i18n: {
    defaultLocale: "fa",
    locales: ["fa", "en"],
    localeConfigs: {
      'fa': {
        label: "فارسی",
        direction: "rtl",
        htmlLang: 'fa-IR',
        calendar: 'persian',
      },
      'en': {
        label: "English",
        direction: "ltr",
        htmlLang: 'en-US',
        calendar: 'gregory',
      }
    }
  },
  title: 'دیتاگیت',
  tagline: 'برای برنامه نویس شدن باید دست به کد شد!',
  url: 'https://datagit.ir',
  baseUrl: '/',
  trailingSlash: false,
  organizationName: 'massoudmaboudi', // Usually your GitHub org/user name.
  projectName: 'datagit', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // onBrokenMarkdownLinks:'ignore',
  favicon: 'img/favicon.ico',
  themeConfig: {
    // Relative to your site's "static" directory.
    // Cannot be SVGs. Can be external URLs too.
    image: 'img/metaImage.png',
    colorMode: {
      // "light" | "dark"
      defaultMode: 'light',

      // Hides the switch in the navbar
      disableSwitch: true,

      // Important to enforce light mode
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'دیتاگیت',
      logo: {
        alt: 'لوگو دیتاگیت',
        src: 'img/logo.svg',
        // srcDark: 'img/logo_dark.svg', // Default to `logo.src`.
        // href: 'https://datagit.ir/', // Default to `siteConfig.baseUrl`.
        // target: '_self', // By default, this value is calculated based on the `href` attribute (the external link will open in a new tab, all others in the current one).
        width: 32,
        height: 32,
      },
      items: [
        {
          label: 'دسته‌بندی‌ها',
          position: 'left',
          items: [
            {
              // to: 'docs/python/introduction',
              // activeBasePath: 'docs',
              label: 'پایتون',
              to: 'courses/python',
              // items: [
              //   {
              //     label: 'معرفی',
              //     to: 'docs/python/introduction',
              //   },
              //   {
              //     label: 'آموزش مقدماتی',
              //     to: 'docs/python/beginner/introduction',
              //   },
              //   {
              //     label: 'Matplotlib',
              //     to: 'docs/',
              //   },
              // ],
            },
            // {
              // to: 'courses/git',
              // label: 'گیت',
              // position: 'left',
              // items: [
              //   {
              //     label: 'معرفی',
              //     to: 'docs/git/introduction',
              //   },
              //   {
              //     label: 'آموزش مقدماتی',
              //     to: 'docs/git/beginner/introduction',
              //   },
              // ],
            // },
          ]
        },
        // {
        //   // to: 'docs/python/introduction',
        //   // activeBasePath: 'docs',
        //   label: 'پایتون',
        //   position: 'left',
        //   items: [
        //     {
        //       label: 'معرفی',
        //       to: 'docs/python/introduction',
        //     },
        //     {
        //       label: 'آموزش مقدماتی',
        //       to: 'docs/python/beginner/introduction',
        //     },
        //     // {
        //     //   label: 'Matplotlib',
        //     //   to: 'docs/',
        //     // },
        //   ],
        // },
        // {
        //   to: 'docs/git/introduction',
        //   label: 'گیت',
        //   position: 'left',
        //   items: [
        //     {
        //       label: 'معرفی',
        //       to: 'docs/git/introduction',
        //     },
        //     {
        //       label: 'آموزش مقدماتی',
        //       to: 'docs/git/beginner/introduction',
        //     },
        //   ],
        // },
        {
          to: 'blog',
          label: 'وبلاگ',
          position: 'left'
        },
        {
          to: "contactus",
          label: "تماس با من",
          position: "right",
        },
        {
          type: 'localeDropdown',
          position: 'right'
        }
      ],
    },
    footer: {
      // style: 'light',
      // logo: {
      //   alt: 'لوگو دیتاگیت',
      //   src: 'img/logoGray.svg',
      //    href: 'https://datagit.ir',
      // },
      copyright: `مسعود معبودی - دیتاگیت © 2018-${new Date().getFullYear()}`,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },

    // CodeBlock Theme,
    // By default, we use Palenight as syntax highlighting theme.
    prism: {
      additionalLanguages: ['r'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          blogTitle: 'وبلاگ دیتاگیت!',
          blogDescription: 'جایی برای خواندن همه چیز!',
          showReadingTime: true,
          blogSidebarTitle: 'مطالب اخیر',
          blogSidebarCount: 'ALL',
          postsPerPage: 'ALL'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'G-98VZHCYVG8',
        },
        gtag: {
          trackingID: 'G-RELC8K3RRZ',
        }
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1024, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
      },
    ],
    [
      '@docusaurus/plugin-sitemap',
      {
        id: 'sitemap_one',
        changefreq: 'weekly',
        priority: 0.5
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/docs/python/introduction',
            to: '/blog/python-introduction',
          },
          {
            from: '/docs/python/beginner/km_zero/python_installation',
            to: '/docs/courses/python/tutorials/beginner/get-started/the-easiest-solution',
          },
          {
            from: '/blog/homebrew-installation',
            to: '/blog/homebrew',
          },
          {
            from: '/docs/python/beginner/introduction',
            to: '/docs/courses/python/tutorials/beginner',
          },
          {
            from: '/docs/python/beginner/introduction/variables',
            to: '/docs/courses/python/tutorials/beginner/km-zero/variables',
          },
          {
            from: '/docs/python/beginner/introduction/local_global_variables',
            to: '/docs/courses/python/tutorials/beginner/functions/variable-scope',
          },
          {
            from: '/docs/python/beginner/functions/function',
            to: '/docs/courses/python/tutorials/beginner/functions/introduction',
          },
          {
            from: '/docs/python/beginner/data_types/string',
            to: '/docs/courses/python/tutorials/beginner/data-types-beginner/strings',
          },
          {
            from: '/docs/python/beginner/data_types/list',
            to: '/docs/courses/python/tutorials/beginner/data-types-advanced/list',
          },
          {
            from: '/docs/python/beginner/data_types/tuple',
            to: '/docs/courses/python/tutorials/beginner/data-types-advanced/tuple',
          },
          {
            from: '/docs/python/beginner/data_types/set',
            to: '/docs/courses/python/tutorials/beginner/data-types-advanced/set',
          },
          {
            from: '/docs/python/beginner/data_types/dictionary',
            to: '/docs/courses/python/tutorials/beginner/data-types-advanced/dictionary',
          },
          {
            from: '/docs/python/beginner/flow_control/for_while',
            to: '/docs/courses/python/tutorials/beginner/loops/for',
          },
          {
            from: '/docs/python/beginner/flow_control/if_else',
            to: '/docs/courses/python/tutorials/beginner/conditions/if-else',
          },
        ],
      },
    ],
    // [
    //   require.resolve("@easyops-cn/docusaurus-search-local"),
    //   {
    //     hashed: true,
    //     language: ["en", "ar"],
    //   },
    // ],
  ],
  scripts: [
  ],
};
