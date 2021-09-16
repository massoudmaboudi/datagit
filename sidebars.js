module.exports = {
  // docs: [
  //   {
  //     type: 'doc',
  //     id: 'introduction'
  //   },
  //   {
  //     type: "category",
  //     label: "پایتون",
  //     items: [
  //       {
  //         type: 'ref',
  //         id: 'courses/python/tutorials/introduction'
  //       },
  //       {
  //         type: "category",
  //         label: "آموزش مقدماتی",
  //         items: [
  //           {
  //             type: 'ref',
  //             id: 'courses/python/tutorials/beginner/introduction'
  //           },
  //           {
  //             type: "category",
  //             label: "کیلومترِ صفر",
  //             items: [
  //               {
  //                 type: 'ref',
  //                 id: 'courses/python/tutorials/beginner/km_zero/python_installation'
  //               },
  //               {
  //                 type: 'ref',
  //                 id: 'courses/python/tutorials/beginner/km_zero/anaconda_installation'
  //               },
  //               {
  //                 type: 'ref',
  //                 id: 'courses/python/tutorials/beginner/km_zero/jupyter_installation'
  //               }
  //             ],
  //           },
  //           {
  //             type: "category",
  //             label: "مقدمه",
  //             items: [
  //               {
  //                 type: 'ref',
  //                 id: 'courses/python/tutorials/beginner/introduction/variables'
  //               },
  //               {
  //                 type: 'ref',
  //                 id: 'courses/python/tutorials/beginner/introduction/local_global_variables'
  //               }
  //             ],
  //           },
  //           {
  //             type: "category",
  //             label: "توابع",
  //             items: [
  //               {
  //                 type: 'ref',
  //                 id: 'courses/python/tutorials/beginner/functions/function'
  //               },
  //               {
  //                 type: 'ref',
  //                 id: 'courses/python/tutorials/beginner/functions/useful_functions'
  //               }
  //             ],
  //           },
  //           {
  //             type: "category",
  //             label: "انواع داده",
  //             items: [
  //               {
  //                 type: 'ref',
  //                 id: 'courses/python/tutorials/beginner/data_types/string'
  //               },
  //               {
  //                 type: 'ref',
  //                 id: 'courses/python/tutorials/beginner/data_types/list'
  //               },
  //               {
  //                 type: 'ref',
  //                 id: 'courses/python/tutorials/beginner/data_types/tuple'
  //               },
  //               {
  //                 type: 'ref',
  //                 id: 'courses/python/tutorials/beginner/data_types/set'
  //               },
  //               {
  //                 type: 'ref',
  //                 id: 'courses/python/tutorials/beginner/data_types/dictionary'
  //               }
  //             ],
  //           },
  //           {
  //             type: "category",
  //             label: "توابع شرطی و حلقه های تکرار",
  //             items: [
  //               {
  //                 type: 'ref',
  //                 id: 'courses/python/tutorials/beginner/flow_control/for_while'
  //               },
  //               {
  //                 type: 'ref',
  //                 id: 'courses/python/tutorials/beginner/flow_control/if_else'
  //               }
  //             ],
  //           },
  //           {
  //             type: 'ref',
  //             id: 'courses/python/tutorials/beginner/indent'
  //           }
  //         ],
  //       },
  //     ]
  //   },
  //   {
  //     type: "category",
  //     label: "گیت",
  //     items: [
  //       {
  //         type: 'ref',
  //         id: 'courses/git/introduction'
  //       },
  //       {
  //         type: "category",
  //         label: "آموزش مقدماتی",
  //         items: [
  //           {
  //             type: 'ref',
  //             id: "courses/git/tutorials/beginner/introduction"
  //           },
  //           {
  //             type: "category",
  //             label: "کیلومترِ صفر",
  //             items: [
  //               {
  //                 type: 'ref',
  //                 id: "courses/git/tutorials/beginner/km_zero/git_installation"
  //               }
  //             ],
  //           }
  //         ]
  //       },
  //     ]
  //   },
  //   // {
  //   //   type: 'ref',
  //   //   id: 'ml/introduction'
  //   // },
  //   // {
  //   //   type: 'ref',
  //   //   id: 'db/introduction'
  //   // },
  //   // {
  //   //   type: 'ref',
  //   //   id: 'r/introduction'
  //   // },
  // ],
  python: [
    {
      type: 'doc',
      id: 'courses/python/tutorials/introduction'
    },
    {
      type: "category",
      label: "آموزش مقدماتی",
      collapsed: false,
      items: [
        "courses/python/tutorials/beginner/introduction",
        {
          type: "category",
          label: "کیلومترِ صفر",
          items: [
            "courses/python/tutorials/beginner/km_zero/python_installation",
            "courses/python/tutorials/beginner/km_zero/anaconda_installation",
            "courses/python/tutorials/beginner/km_zero/jupyter_installation"
          ],
        },
        {
          type: "category",
          label: "مقدمه",
          items: [
            "courses/python/tutorials/beginner/introduction/variables",
            "courses/python/tutorials/beginner/introduction/local_global_variables"
          ],
        },
        {
          type: "category",
          label: "توابع",
          items: [
            "courses/python/tutorials/beginner/functions/function",
            "courses/python/tutorials/beginner/functions/useful_functions"
          ],
        },
        {
          type: "category",
          label: "انواع داده",
          items: [
            "courses/python/tutorials/beginner/data_types/string",
            "courses/python/tutorials/beginner/data_types/list",
            "courses/python/tutorials/beginner/data_types/tuple",
            "courses/python/tutorials/beginner/data_types/set",
            "courses/python/tutorials/beginner/data_types/dictionary",
          ],
        },
        {
          type: "category",
          label: "توابع شرطی و حلقه های تکرار",
          items: [
            "courses/python/tutorials/beginner/flow_control/for_while",
            "courses/python/tutorials/beginner/flow_control/if_else"
          ],
        },
        "courses/python/tutorials/beginner/indent",
      ],
    },
  ],
  git: [
    {
      type: 'doc',
      id: 'courses/git/introduction'
    },
    {
      type: "category",
      label: "آموزش مقدماتی",
      collapsed: false,
      items: [
        "courses/git/tutorials/beginner/introduction",
        {
          type: "category",
          label: "کیلومترِ صفر",
          items: [
            "courses/git/tutorials/beginner/km_zero/git_installation"
          ],
        }
      ]
    },
  ],
};
