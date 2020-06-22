window.BENCHMARK_DATA = {
  "lastUpdate": 1592847297252,
  "repoUrl": "https://github.com/WizardOfMenlo/stabchain",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "committer": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "distinct": true,
          "id": "e318d2f63592aa6cec0c2531ff9e4efa74c1fd95",
          "message": "Refactored benchmarks",
          "timestamp": "2020-06-12T21:07:51+02:00",
          "tree_id": "065742e0b503394f8ea984f1d8f62a12c6e4b83e",
          "url": "https://github.com/WizardOfMenlo/stabchain/commit/e318d2f63592aa6cec0c2531ff9e4efa74c1fd95"
        },
        "date": 1591989441906,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 265,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 492,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1395,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 2805,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 5971,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 12954,
            "range": "± 400",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 27577,
            "range": "± 865",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 140,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/8",
            "value": 195,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 181,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/16",
            "value": 277,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 239,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/32",
            "value": 374,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 357,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/64",
            "value": 475,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 573,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/128",
            "value": 753,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 1079,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/256",
            "value": 1362,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 1905,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/512",
            "value": 2493,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 68,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 94,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 111,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 139,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 197,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 309,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 500,
            "range": "± 29",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "WizardOfMenlo",
            "username": "WizardOfMenlo"
          },
          "committer": {
            "name": "WizardOfMenlo",
            "username": "WizardOfMenlo"
          },
          "id": "e318d2f63592aa6cec0c2531ff9e4efa74c1fd95",
          "message": "Refactor group and Transversal",
          "timestamp": "2020-06-12T11:55:50Z",
          "url": "https://github.com/WizardOfMenlo/stabchain/pull/8/commits/e318d2f63592aa6cec0c2531ff9e4efa74c1fd95"
        },
        "date": 1591989586843,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 336,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 648,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1721,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 3569,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 7571,
            "range": "± 431",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 16676,
            "range": "± 421",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 35439,
            "range": "± 558",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 179,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/8",
            "value": 245,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 204,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/16",
            "value": 333,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 284,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/32",
            "value": 420,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 416,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/64",
            "value": 564,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 694,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/128",
            "value": 944,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 1286,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/256",
            "value": 1684,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 2306,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/512",
            "value": 3054,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 86,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 107,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 132,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 177,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 236,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 379,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 603,
            "range": "± 16",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "WizardOfMenlo",
            "username": "WizardOfMenlo"
          },
          "committer": {
            "name": "WizardOfMenlo",
            "username": "WizardOfMenlo"
          },
          "id": "18fbf72ab953045f7c0dcad8d3a4bb7ed86a56cc",
          "message": "Refactor group and Transversal",
          "timestamp": "2020-06-12T11:55:50Z",
          "url": "https://github.com/WizardOfMenlo/stabchain/pull/8/commits/18fbf72ab953045f7c0dcad8d3a4bb7ed86a56cc"
        },
        "date": 1591989648104,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 310,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 618,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1656,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 3417,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 7212,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 16018,
            "range": "± 402",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 33922,
            "range": "± 453",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 173,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/8",
            "value": 230,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 191,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/16",
            "value": 307,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 261,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/32",
            "value": 386,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 408,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/64",
            "value": 554,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 655,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/128",
            "value": 859,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 1202,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/256",
            "value": 2061,
            "range": "± 331",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 2197,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/512",
            "value": 3163,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 83,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 111,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 129,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 136,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 232,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 354,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 590,
            "range": "± 20",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "committer": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "distinct": true,
          "id": "18fbf72ab953045f7c0dcad8d3a4bb7ed86a56cc",
          "message": "Fix lint",
          "timestamp": "2020-06-12T21:11:02+02:00",
          "tree_id": "c802cfd7d63c5c4cb10f653ae24701e36445d004",
          "url": "https://github.com/WizardOfMenlo/stabchain/commit/18fbf72ab953045f7c0dcad8d3a4bb7ed86a56cc"
        },
        "date": 1591989716791,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 323,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 622,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1659,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 3414,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 7260,
            "range": "± 256",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 16000,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 34239,
            "range": "± 1102",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 172,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/8",
            "value": 236,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 201,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/16",
            "value": 320,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 291,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/32",
            "value": 378,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 396,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/64",
            "value": 547,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 648,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/128",
            "value": 883,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 1239,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/256",
            "value": 1612,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 2228,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/512",
            "value": 3063,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 84,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 113,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 127,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 187,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 246,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 378,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 794,
            "range": "± 337",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dfc58a90390e70080d672ae26028837e6a35c430",
          "message": "Merge pull request #8 from WizardOfMenlo/refactor",
          "timestamp": "2020-06-13T18:56:48+02:00",
          "tree_id": "05d4d318cef8809337c11403acf24265537a16ad",
          "url": "https://github.com/WizardOfMenlo/stabchain/commit/dfc58a90390e70080d672ae26028837e6a35c430"
        },
        "date": 1592068004900,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 334,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 664,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1728,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 3578,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 7502,
            "range": "± 337",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 16572,
            "range": "± 638",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 35449,
            "range": "± 1253",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 178,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/8",
            "value": 244,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 208,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/16",
            "value": 346,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 283,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/32",
            "value": 400,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 439,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/64",
            "value": 581,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 691,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/128",
            "value": 905,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 1284,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/256",
            "value": 1679,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 2456,
            "range": "± 255",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/512",
            "value": 3049,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 87,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 116,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 136,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 166,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 255,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 387,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 614,
            "range": "± 17",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "committer": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "distinct": true,
          "id": "bdb0361020926c023e07e1d4dfda0d8e02981da7",
          "message": "API is a bit more flexible now",
          "timestamp": "2020-06-13T23:51:04+02:00",
          "tree_id": "a365be4fb976c8c11fe4f86bf8e74933cb73dfea",
          "url": "https://github.com/WizardOfMenlo/stabchain/commit/bdb0361020926c023e07e1d4dfda0d8e02981da7"
        },
        "date": 1592085852941,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 321,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 597,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1653,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 3367,
            "range": "± 263",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 7022,
            "range": "± 396",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 15673,
            "range": "± 1192",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 33651,
            "range": "± 2501",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 170,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/8",
            "value": 230,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 220,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/16",
            "value": 315,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 278,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/32",
            "value": 399,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 415,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/64",
            "value": 564,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 684,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/128",
            "value": 865,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 1272,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/256",
            "value": 1742,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 2338,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/512",
            "value": 3072,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 79,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 108,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 129,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 160,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 233,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 368,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 743,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/8",
            "value": 1017,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/8",
            "value": 1486,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/16",
            "value": 1940,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/16",
            "value": 2901,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/32",
            "value": 3656,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/32",
            "value": 5481,
            "range": "± 263",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/64",
            "value": 7090,
            "range": "± 268",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/64",
            "value": 11007,
            "range": "± 1328",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/128",
            "value": 14027,
            "range": "± 850",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/128",
            "value": 20679,
            "range": "± 1199",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/256",
            "value": 27789,
            "range": "± 1648",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/256",
            "value": 40316,
            "range": "± 2447",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/512",
            "value": 54775,
            "range": "± 3226",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/512",
            "value": 79777,
            "range": "± 3917",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "WizardOfMenlo",
            "username": "WizardOfMenlo"
          },
          "committer": {
            "name": "WizardOfMenlo",
            "username": "WizardOfMenlo"
          },
          "id": "bdb0361020926c023e07e1d4dfda0d8e02981da7",
          "message": "Orbit",
          "timestamp": "2020-06-13T16:56:51Z",
          "url": "https://github.com/WizardOfMenlo/stabchain/pull/9/commits/bdb0361020926c023e07e1d4dfda0d8e02981da7"
        },
        "date": 1592085891416,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 306,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 595,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1560,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 3434,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 6627,
            "range": "± 495",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 15284,
            "range": "± 1208",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 31683,
            "range": "± 2663",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 154,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/8",
            "value": 212,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 180,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/16",
            "value": 272,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 234,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/32",
            "value": 341,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 379,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/64",
            "value": 506,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 633,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/128",
            "value": 746,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 1122,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/256",
            "value": 1862,
            "range": "± 345",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 2060,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/512",
            "value": 2704,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 83,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 110,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 115,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 147,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 214,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 397,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 605,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/8",
            "value": 1003,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/8",
            "value": 1427,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/16",
            "value": 1842,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/16",
            "value": 2587,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/32",
            "value": 3255,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/32",
            "value": 5050,
            "range": "± 239",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/64",
            "value": 6224,
            "range": "± 415",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/64",
            "value": 9197,
            "range": "± 747",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/128",
            "value": 12335,
            "range": "± 1105",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/128",
            "value": 17908,
            "range": "± 1238",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/256",
            "value": 24177,
            "range": "± 1959",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/256",
            "value": 35038,
            "range": "± 3333",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/512",
            "value": 47454,
            "range": "± 3468",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/512",
            "value": 74516,
            "range": "± 5180",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "committer": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "distinct": true,
          "id": "2fe14531cfd7835d0c34d66f8e42da060ad5f343",
          "message": "Update benchmark",
          "timestamp": "2020-06-14T00:02:59+02:00",
          "tree_id": "2a13dff6ac218a3160fcec575c84db6537a58986",
          "url": "https://github.com/WizardOfMenlo/stabchain/commit/2fe14531cfd7835d0c34d66f8e42da060ad5f343"
        },
        "date": 1592086347209,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 333,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 643,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1712,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 3558,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 7488,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 16641,
            "range": "± 566",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 35632,
            "range": "± 873",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 179,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/8",
            "value": 243,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 212,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/16",
            "value": 327,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 281,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/32",
            "value": 403,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 407,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/64",
            "value": 563,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 664,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/128",
            "value": 914,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 1278,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/256",
            "value": 1668,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 2302,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/512",
            "value": 3039,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 86,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 107,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 116,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 165,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 227,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 376,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 601,
            "range": "± 9",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "committer": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "distinct": true,
          "id": "1fd3e9c2c2028efc698eba3660196615eea0b10a",
          "message": "Fixed clippy",
          "timestamp": "2020-06-14T00:18:30+02:00",
          "tree_id": "bdc88dac660054435c486fef9401a12077338a1b",
          "url": "https://github.com/WizardOfMenlo/stabchain/commit/1fd3e9c2c2028efc698eba3660196615eea0b10a"
        },
        "date": 1592087419678,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 270,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 517,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1353,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 2821,
            "range": "± 231",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 6150,
            "range": "± 559",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 13345,
            "range": "± 1262",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 29311,
            "range": "± 2606",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 135,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/8",
            "value": 188,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 165,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/16",
            "value": 242,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 215,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/32",
            "value": 293,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 329,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/64",
            "value": 438,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 520,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/128",
            "value": 717,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 961,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/256",
            "value": 1307,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 1779,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/512",
            "value": 2273,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 65,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 91,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 102,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 123,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 171,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 277,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 488,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/8",
            "value": 792,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/8",
            "value": 1186,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/16",
            "value": 1496,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/16",
            "value": 2161,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/32",
            "value": 2909,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/32",
            "value": 4221,
            "range": "± 432",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/64",
            "value": 5511,
            "range": "± 385",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/64",
            "value": 7997,
            "range": "± 528",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/128",
            "value": 10769,
            "range": "± 923",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/128",
            "value": 17068,
            "range": "± 1521",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/256",
            "value": 22793,
            "range": "± 2248",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/256",
            "value": 33390,
            "range": "± 2175",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/512",
            "value": 44898,
            "range": "± 3155",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/512",
            "value": 63299,
            "range": "± 5415",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "committer": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "distinct": true,
          "id": "54bc16804cc84748fae6ef65b641d390d0be893d",
          "message": "Forgot to update doc tests",
          "timestamp": "2020-06-14T00:21:31+02:00",
          "tree_id": "7abbabebadcd41880377ae1e909c59530b5fba4a",
          "url": "https://github.com/WizardOfMenlo/stabchain/commit/54bc16804cc84748fae6ef65b641d390d0be893d"
        },
        "date": 1592087657871,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 322,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 609,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1664,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 3207,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 6782,
            "range": "± 338",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 15730,
            "range": "± 709",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 33256,
            "range": "± 947",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 175,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/8",
            "value": 216,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 205,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/16",
            "value": 314,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 289,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/32",
            "value": 375,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 403,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/64",
            "value": 569,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 669,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/128",
            "value": 859,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 1299,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/256",
            "value": 1724,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 2330,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/512",
            "value": 3191,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 80,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 123,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 112,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 162,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 190,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 366,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 495,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/8",
            "value": 1022,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/8",
            "value": 1477,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/16",
            "value": 1849,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/16",
            "value": 2800,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/32",
            "value": 3607,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/32",
            "value": 5469,
            "range": "± 571",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/64",
            "value": 6841,
            "range": "± 306",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/64",
            "value": 10196,
            "range": "± 530",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/128",
            "value": 13687,
            "range": "± 613",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/128",
            "value": 20904,
            "range": "± 1144",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/256",
            "value": 27453,
            "range": "± 1473",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/256",
            "value": 39692,
            "range": "± 1321",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/512",
            "value": 52398,
            "range": "± 2093",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/512",
            "value": 81222,
            "range": "± 3894",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1c2ca6c86be122a547b1f409f12ccb21edfcf809",
          "message": "Only update on master",
          "timestamp": "2020-06-14T00:25:17+02:00",
          "tree_id": "572c657b1ac5ec440b07fc21a3b260a23218ed02",
          "url": "https://github.com/WizardOfMenlo/stabchain/commit/1c2ca6c86be122a547b1f409f12ccb21edfcf809"
        },
        "date": 1592087675143,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 308,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 554,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1544,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 3000,
            "range": "± 247",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 6289,
            "range": "± 480",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 14365,
            "range": "± 1224",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 30137,
            "range": "± 3123",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 139,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/8",
            "value": 224,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 202,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/16",
            "value": 282,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 276,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/32",
            "value": 393,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 403,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/64",
            "value": 531,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 641,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/128",
            "value": 831,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 1215,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/256",
            "value": 1497,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 2185,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/512",
            "value": 2884,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 77,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 104,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 128,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 157,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 196,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 290,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 484,
            "range": "± 42",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "955d6a13175c5f4b88e6ca54d1a7132cb2bcc1be",
          "message": "Update pull benches",
          "timestamp": "2020-06-14T00:26:42+02:00",
          "tree_id": "e5a598fcf4ad45092af1a3e5838a0ef7505e760b",
          "url": "https://github.com/WizardOfMenlo/stabchain/commit/955d6a13175c5f4b88e6ca54d1a7132cb2bcc1be"
        },
        "date": 1592087765463,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 319,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 618,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1616,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 3357,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 7167,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 15652,
            "range": "± 1103",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 32053,
            "range": "± 1374",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 164,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/8",
            "value": 219,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 193,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/16",
            "value": 299,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 244,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/32",
            "value": 350,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 394,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/64",
            "value": 553,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 619,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/128",
            "value": 816,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 1137,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/256",
            "value": 1498,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 2140,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/512",
            "value": 2781,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 80,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 102,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 95,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 157,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 219,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 334,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 580,
            "range": "± 18",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "committer": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "distinct": true,
          "id": "6a8e89d934a3b38fd57bd16538938b7b523c1533",
          "message": "Added tests",
          "timestamp": "2020-06-14T22:55:05+02:00",
          "tree_id": "b4aba7b30e76d6657ab71f21793c0710c6673426",
          "url": "https://github.com/WizardOfMenlo/stabchain/commit/6a8e89d934a3b38fd57bd16538938b7b523c1533"
        },
        "date": 1592168969148,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 260,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 499,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1312,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 2738,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 5745,
            "range": "± 356",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 12350,
            "range": "± 739",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 25931,
            "range": "± 1415",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 170,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/8",
            "value": 209,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 193,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/16",
            "value": 268,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 212,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/32",
            "value": 322,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 345,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/64",
            "value": 441,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 566,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/128",
            "value": 690,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 1021,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/256",
            "value": 1363,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 1755,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/512",
            "value": 2310,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 77,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 79,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 99,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 124,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 180,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 281,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 431,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/8",
            "value": 792,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/8",
            "value": 1202,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/8",
            "value": 2045,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/16",
            "value": 1528,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/16",
            "value": 2308,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/16",
            "value": 5286,
            "range": "± 334",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/32",
            "value": 2871,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/32",
            "value": 4433,
            "range": "± 398",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/32",
            "value": 11575,
            "range": "± 773",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/64",
            "value": 5523,
            "range": "± 416",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/64",
            "value": 8617,
            "range": "± 552",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/64",
            "value": 30111,
            "range": "± 2277",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/128",
            "value": 11091,
            "range": "± 1099",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/128",
            "value": 16585,
            "range": "± 1003",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/128",
            "value": 90530,
            "range": "± 5656",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/256",
            "value": 21793,
            "range": "± 1220",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/256",
            "value": 32552,
            "range": "± 2011",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/256",
            "value": 261795,
            "range": "± 17206",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/512",
            "value": 43478,
            "range": "± 2940",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/512",
            "value": 64123,
            "range": "± 3515",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/512",
            "value": 911624,
            "range": "± 39879",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "committer": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "distinct": true,
          "id": "867025872e4128fbd1a9f073f9ef7dc6067d5820",
          "message": "Fix clippy lint (exchange with previous)",
          "timestamp": "2020-06-14T23:23:23+02:00",
          "tree_id": "8b40585e55e6638491bfb4e1d2307fbf38d5e93a",
          "url": "https://github.com/WizardOfMenlo/stabchain/commit/867025872e4128fbd1a9f073f9ef7dc6067d5820"
        },
        "date": 1592170643743,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 311,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 594,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1575,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 3324,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 7094,
            "range": "± 357",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 15765,
            "range": "± 2182",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 33332,
            "range": "± 1061",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 169,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/8",
            "value": 232,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 198,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/16",
            "value": 293,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 262,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/32",
            "value": 364,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 397,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/64",
            "value": 579,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 628,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/128",
            "value": 821,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 1157,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/256",
            "value": 1465,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 2012,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/512",
            "value": 2631,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 81,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 101,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 113,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 145,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 205,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 295,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 437,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/8",
            "value": 951,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/8",
            "value": 1446,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/8",
            "value": 2459,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/16",
            "value": 1839,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/16",
            "value": 2778,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/16",
            "value": 6097,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/32",
            "value": 3505,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/32",
            "value": 5283,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/32",
            "value": 13941,
            "range": "± 701",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/64",
            "value": 6905,
            "range": "± 1122",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/64",
            "value": 10332,
            "range": "± 403",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/64",
            "value": 36368,
            "range": "± 1416",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/128",
            "value": 13618,
            "range": "± 450",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/128",
            "value": 20054,
            "range": "± 1334",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/128",
            "value": 102242,
            "range": "± 3588",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/256",
            "value": 26671,
            "range": "± 750",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/256",
            "value": 39169,
            "range": "± 1963",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/256",
            "value": 299110,
            "range": "± 16941",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/512",
            "value": 52889,
            "range": "± 2726",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/512",
            "value": 77632,
            "range": "± 5197",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/512",
            "value": 1036680,
            "range": "± 44986",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "committer": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "distinct": true,
          "id": "8be6e8ffd6b93d939b78a12200ff134d7226617a",
          "message": "Typo",
          "timestamp": "2020-06-14T23:25:16+02:00",
          "tree_id": "81e7040d0cad65656f9cac86ceab563ac3f31290",
          "url": "https://github.com/WizardOfMenlo/stabchain/commit/8be6e8ffd6b93d939b78a12200ff134d7226617a"
        },
        "date": 1592170743845,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 306,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 587,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1581,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 3242,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 6821,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 15274,
            "range": "± 413",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 32224,
            "range": "± 785",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 163,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/8",
            "value": 221,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 197,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/16",
            "value": 288,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 243,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/32",
            "value": 352,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 355,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/64",
            "value": 497,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 586,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/128",
            "value": 768,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 1083,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/256",
            "value": 1351,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 1926,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/512",
            "value": 2524,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 79,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 106,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 119,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 142,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 199,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 285,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 420,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/8",
            "value": 921,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/8",
            "value": 1393,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/8",
            "value": 2502,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/16",
            "value": 1753,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/16",
            "value": 2673,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/16",
            "value": 5947,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/32",
            "value": 3377,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/32",
            "value": 5227,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/32",
            "value": 13982,
            "range": "± 506",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/64",
            "value": 7146,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/64",
            "value": 9900,
            "range": "± 365",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/64",
            "value": 35737,
            "range": "± 1106",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/128",
            "value": 13587,
            "range": "± 355",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/128",
            "value": 19162,
            "range": "± 429",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/128",
            "value": 100416,
            "range": "± 2870",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/256",
            "value": 25509,
            "range": "± 1397",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/256",
            "value": 37496,
            "range": "± 766",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/256",
            "value": 291638,
            "range": "± 9193",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/512",
            "value": 51596,
            "range": "± 1878",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/512",
            "value": 75565,
            "range": "± 2805",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/512",
            "value": 1002309,
            "range": "± 26153",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "committer": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "distinct": true,
          "id": "02d606e5a25b58f42d6cdc30863feaaa9d6f6164",
          "message": "Better test",
          "timestamp": "2020-06-14T23:26:59+02:00",
          "tree_id": "cf4ff26ef847f1eea12836c32becfa681388e197",
          "url": "https://github.com/WizardOfMenlo/stabchain/commit/02d606e5a25b58f42d6cdc30863feaaa9d6f6164"
        },
        "date": 1592170814857,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 253,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 506,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1345,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 2696,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 5749,
            "range": "± 406",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 12822,
            "range": "± 975",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 27493,
            "range": "± 2142",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 136,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/8",
            "value": 184,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 157,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/16",
            "value": 243,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 209,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/32",
            "value": 297,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 313,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/64",
            "value": 398,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 483,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/128",
            "value": 674,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 922,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/256",
            "value": 1146,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 1598,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/512",
            "value": 2213,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 67,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 88,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 108,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 124,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 158,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 226,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 332,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/8",
            "value": 741,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/8",
            "value": 1166,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/8",
            "value": 2023,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/16",
            "value": 1453,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/16",
            "value": 2221,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/16",
            "value": 4672,
            "range": "± 407",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/32",
            "value": 2888,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/32",
            "value": 4350,
            "range": "± 567",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/32",
            "value": 11364,
            "range": "± 873",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/64",
            "value": 5410,
            "range": "± 362",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/64",
            "value": 8268,
            "range": "± 590",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/64",
            "value": 30184,
            "range": "± 2445",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/128",
            "value": 10892,
            "range": "± 1075",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/128",
            "value": 16017,
            "range": "± 1147",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/128",
            "value": 87200,
            "range": "± 10959",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/256",
            "value": 21564,
            "range": "± 4197",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/256",
            "value": 31590,
            "range": "± 2301",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/256",
            "value": 239397,
            "range": "± 21766",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/512",
            "value": 42590,
            "range": "± 3032",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/512",
            "value": 64537,
            "range": "± 6027",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/512",
            "value": 874255,
            "range": "± 56779",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "committer": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "distinct": true,
          "id": "e27145650cdc8f44fda5d30351d6f1932661002b",
          "message": "Clippy you are the bane of me",
          "timestamp": "2020-06-14T23:28:53+02:00",
          "tree_id": "104cfdd1c15a681bcf6ac91524cac7fea0942fb0",
          "url": "https://github.com/WizardOfMenlo/stabchain/commit/e27145650cdc8f44fda5d30351d6f1932661002b"
        },
        "date": 1592170964037,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 265,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 512,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1453,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 2945,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 5992,
            "range": "± 375",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 13582,
            "range": "± 745",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 28821,
            "range": "± 1677",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 147,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/8",
            "value": 202,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 187,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/16",
            "value": 276,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 263,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/32",
            "value": 340,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 371,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/64",
            "value": 518,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 593,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/128",
            "value": 729,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 1091,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/256",
            "value": 1423,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 2179,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/512",
            "value": 3182,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 71,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 105,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 118,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 141,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 198,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 279,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 494,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/8",
            "value": 887,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/8",
            "value": 1310,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/8",
            "value": 2259,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/16",
            "value": 1750,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/16",
            "value": 2467,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/16",
            "value": 5584,
            "range": "± 321",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/32",
            "value": 3205,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/32",
            "value": 4859,
            "range": "± 263",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/32",
            "value": 12913,
            "range": "± 636",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/64",
            "value": 6291,
            "range": "± 472",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/64",
            "value": 9587,
            "range": "± 614",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/64",
            "value": 33265,
            "range": "± 1659",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/128",
            "value": 12748,
            "range": "± 857",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/128",
            "value": 18293,
            "range": "± 940",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/128",
            "value": 97818,
            "range": "± 6055",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/256",
            "value": 24649,
            "range": "± 1186",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/256",
            "value": 38201,
            "range": "± 2900",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/256",
            "value": 288256,
            "range": "± 14385",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/512",
            "value": 46732,
            "range": "± 2462",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/512",
            "value": 70245,
            "range": "± 3771",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/512",
            "value": 1000510,
            "range": "± 52129",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0247fd4f90b918a0d7c68d8b9fa1a8a2272bc749",
          "message": "reduce number of benchmarks run",
          "timestamp": "2020-06-15T00:22:43+02:00",
          "tree_id": "a1bcb3c28506919b4c63649f539db58164d5e768",
          "url": "https://github.com/WizardOfMenlo/stabchain/commit/0247fd4f90b918a0d7c68d8b9fa1a8a2272bc749"
        },
        "date": 1592173884935,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 229,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 428,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1176,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 2404,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 5058,
            "range": "± 307",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 11048,
            "range": "± 651",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 23524,
            "range": "± 1268",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 135,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/8",
            "value": 180,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 158,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/16",
            "value": 243,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 215,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/32",
            "value": 298,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 329,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/64",
            "value": 414,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 497,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/128",
            "value": 650,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 925,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/256",
            "value": 1611,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 1649,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/512",
            "value": 2139,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 62,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 73,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 101,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 129,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 190,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 267,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 367,
            "range": "± 17",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "committer": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "distinct": true,
          "id": "d1e79c332a4579e81a6fc7aaf77ffabf6ed1c47c",
          "message": "Reintegrate failiing benchmark",
          "timestamp": "2020-06-15T14:51:44+02:00",
          "tree_id": "c05f446b8892ec910a40a8dcb4ec8ad8c9b5de1f",
          "url": "https://github.com/WizardOfMenlo/stabchain/commit/d1e79c332a4579e81a6fc7aaf77ffabf6ed1c47c"
        },
        "date": 1592226852991,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 323,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 603,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1623,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 3426,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 7239,
            "range": "± 335",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 16063,
            "range": "± 578",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 34714,
            "range": "± 1826",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 153,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/8",
            "value": 231,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 200,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/16",
            "value": 312,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 261,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/32",
            "value": 389,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 385,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/64",
            "value": 551,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 654,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/128",
            "value": 888,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 1224,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/256",
            "value": 1588,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 2185,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/512",
            "value": 2888,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 82,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 111,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 126,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 160,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 245,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 379,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 592,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/8",
            "value": 972,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/8",
            "value": 1442,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/8",
            "value": 2525,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/16",
            "value": 1858,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/16",
            "value": 2824,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/16",
            "value": 6370,
            "range": "± 504",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/32",
            "value": 3566,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/32",
            "value": 5384,
            "range": "± 309",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/32",
            "value": 14142,
            "range": "± 455",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/64",
            "value": 6983,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/64",
            "value": 10324,
            "range": "± 337",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/64",
            "value": 37156,
            "range": "± 2184",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/8",
            "value": 1794,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/8",
            "value": 2793,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/8",
            "value": 6012,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/16",
            "value": 3479,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/16",
            "value": 5319,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/16",
            "value": 13923,
            "range": "± 403",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/32",
            "value": 6907,
            "range": "± 285",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/32",
            "value": 10329,
            "range": "± 721",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/32",
            "value": 37195,
            "range": "± 1363",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/64",
            "value": 13321,
            "range": "± 439",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/64",
            "value": 19949,
            "range": "± 1057",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/64",
            "value": 103959,
            "range": "± 3717",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/8",
            "value": 805,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/8",
            "value": 1242,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/8",
            "value": 2396,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/16",
            "value": 1518,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/16",
            "value": 2336,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/16",
            "value": 5531,
            "range": "± 378",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/32",
            "value": 2698,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/32",
            "value": 4480,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/32",
            "value": 13159,
            "range": "± 629",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/64",
            "value": 5181,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/64",
            "value": 8623,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/64",
            "value": 34607,
            "range": "± 1235",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/8",
            "value": 6030,
            "range": "± 293",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/8",
            "value": 2845,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/16",
            "value": 22409,
            "range": "± 901",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/16",
            "value": 6646,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/32",
            "value": 97289,
            "range": "± 2405",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/32",
            "value": 15023,
            "range": "± 467",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/64",
            "value": 541194,
            "range": "± 23291",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/64",
            "value": 38811,
            "range": "± 1251",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/8",
            "value": 16245,
            "range": "± 494",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/8",
            "value": 6668,
            "range": "± 312",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/16",
            "value": 59895,
            "range": "± 2169",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/16",
            "value": 15265,
            "range": "± 783",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/32",
            "value": 296539,
            "range": "± 8740",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/32",
            "value": 39057,
            "range": "± 3546",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/64",
            "value": 1881837,
            "range": "± 71224",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/64",
            "value": 107455,
            "range": "± 4126",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/8",
            "value": 5740,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/8",
            "value": 2735,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/16",
            "value": 22211,
            "range": "± 1209",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/16",
            "value": 6304,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/32",
            "value": 97916,
            "range": "± 4749",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/32",
            "value": 14505,
            "range": "± 453",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/64",
            "value": 545344,
            "range": "± 30290",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/64",
            "value": 37628,
            "range": "± 1431",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "committer": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "distinct": true,
          "id": "173f064dd681c5adb58936e5453a83a8e8c40bdf",
          "message": "Improve formatting",
          "timestamp": "2020-06-15T14:56:32+02:00",
          "tree_id": "59328d7f55aac58f042722053a71a345a2b9185a",
          "url": "https://github.com/WizardOfMenlo/stabchain/commit/173f064dd681c5adb58936e5453a83a8e8c40bdf"
        },
        "date": 1592227549152,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 317,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 609,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1609,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 3404,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 7153,
            "range": "± 427",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 15535,
            "range": "± 739",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 32773,
            "range": "± 2425",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 169,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/8",
            "value": 235,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 216,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/16",
            "value": 317,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 323,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/32",
            "value": 410,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 427,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/64",
            "value": 559,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 668,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/128",
            "value": 902,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 1282,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/256",
            "value": 1635,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 2266,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/512",
            "value": 3097,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 81,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 103,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 125,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 180,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 217,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 310,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 478,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/8",
            "value": 1013,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/8",
            "value": 1473,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/8",
            "value": 2641,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/16",
            "value": 1878,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/16",
            "value": 2944,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/16",
            "value": 6036,
            "range": "± 239",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/32",
            "value": 3612,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/32",
            "value": 5523,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/32",
            "value": 14787,
            "range": "± 1094",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/64",
            "value": 7086,
            "range": "± 707",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/64",
            "value": 10628,
            "range": "± 475",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/64",
            "value": 38369,
            "range": "± 2168",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/8",
            "value": 1911,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/8",
            "value": 2874,
            "range": "± 231",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/8",
            "value": 6219,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/16",
            "value": 3605,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/16",
            "value": 5597,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/16",
            "value": 14551,
            "range": "± 932",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/32",
            "value": 7185,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/32",
            "value": 10585,
            "range": "± 401",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/32",
            "value": 38953,
            "range": "± 1409",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/64",
            "value": 14237,
            "range": "± 499",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/64",
            "value": 20865,
            "range": "± 1042",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/64",
            "value": 110088,
            "range": "± 5749",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/8",
            "value": 798,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/8",
            "value": 1281,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/8",
            "value": 2476,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/16",
            "value": 1528,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/16",
            "value": 2476,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/16",
            "value": 5786,
            "range": "± 633",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/32",
            "value": 2858,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/32",
            "value": 4715,
            "range": "± 255",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/32",
            "value": 13964,
            "range": "± 572",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/64",
            "value": 5480,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/64",
            "value": 9005,
            "range": "± 335",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/64",
            "value": 36813,
            "range": "± 1959",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/8",
            "value": 6839,
            "range": "± 457",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/8",
            "value": 3077,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/16",
            "value": 25840,
            "range": "± 1424",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/16",
            "value": 6998,
            "range": "± 537",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/32",
            "value": 114248,
            "range": "± 5497",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/32",
            "value": 16108,
            "range": "± 780",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/64",
            "value": 611437,
            "range": "± 30541",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/64",
            "value": 40895,
            "range": "± 975",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/8",
            "value": 17588,
            "range": "± 854",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/8",
            "value": 6997,
            "range": "± 267",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/16",
            "value": 66086,
            "range": "± 2176",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/16",
            "value": 16168,
            "range": "± 747",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/32",
            "value": 327520,
            "range": "± 22481",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/32",
            "value": 41319,
            "range": "± 1447",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/64",
            "value": 2132038,
            "range": "± 58655",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/64",
            "value": 115281,
            "range": "± 3938",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/8",
            "value": 6236,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/8",
            "value": 2890,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/16",
            "value": 23751,
            "range": "± 818",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/16",
            "value": 6702,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/32",
            "value": 107340,
            "range": "± 4263",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/32",
            "value": 15589,
            "range": "± 729",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/64",
            "value": 603245,
            "range": "± 71819",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/64",
            "value": 39418,
            "range": "± 1407",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "845f45d2b38cb02e49448d81ecbb0b0639d78570",
          "message": "Merge pull request #9 from WizardOfMenlo/orbit",
          "timestamp": "2020-06-15T15:31:48+02:00",
          "tree_id": "ad89060d41970bc3ae94ae59e3f46603f9e70950",
          "url": "https://github.com/WizardOfMenlo/stabchain/commit/845f45d2b38cb02e49448d81ecbb0b0639d78570"
        },
        "date": 1592229211219,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 296,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 564,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1439,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 2826,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 6047,
            "range": "± 374",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 14072,
            "range": "± 956",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 29622,
            "range": "± 2157",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 147,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/8",
            "value": 213,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 169,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/16",
            "value": 262,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 237,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/32",
            "value": 351,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 366,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/64",
            "value": 471,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 583,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/128",
            "value": 784,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 1029,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/256",
            "value": 1318,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 1902,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/512",
            "value": 2435,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 77,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 96,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 102,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 107,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 189,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 275,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 371,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/8",
            "value": 788,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/8",
            "value": 1173,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/8",
            "value": 2113,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/16",
            "value": 1560,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/16",
            "value": 2301,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/16",
            "value": 5114,
            "range": "± 389",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/32",
            "value": 2960,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/32",
            "value": 4392,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/32",
            "value": 11744,
            "range": "± 843",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/64",
            "value": 5636,
            "range": "± 284",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/64",
            "value": 8487,
            "range": "± 590",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/64",
            "value": 30539,
            "range": "± 2370",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/8",
            "value": 1486,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/8",
            "value": 2265,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/8",
            "value": 5319,
            "range": "± 272",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/16",
            "value": 3087,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/16",
            "value": 4715,
            "range": "± 345",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/16",
            "value": 11831,
            "range": "± 792",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/32",
            "value": 5631,
            "range": "± 539",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/32",
            "value": 8641,
            "range": "± 800",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/32",
            "value": 30964,
            "range": "± 1957",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/64",
            "value": 11222,
            "range": "± 588",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/64",
            "value": 17187,
            "range": "± 901",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/64",
            "value": 86616,
            "range": "± 5341",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/8",
            "value": 634,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/8",
            "value": 1017,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/8",
            "value": 1961,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/16",
            "value": 1293,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/16",
            "value": 1986,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/16",
            "value": 4710,
            "range": "± 292",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/32",
            "value": 2346,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/32",
            "value": 3659,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/32",
            "value": 11159,
            "range": "± 968",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/64",
            "value": 4481,
            "range": "± 365",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/64",
            "value": 7408,
            "range": "± 1077",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/64",
            "value": 28685,
            "range": "± 1649",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/8",
            "value": 5035,
            "range": "± 321",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/8",
            "value": 2399,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/16",
            "value": 19001,
            "range": "± 1274",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/16",
            "value": 5621,
            "range": "± 305",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/32",
            "value": 82283,
            "range": "± 5008",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/32",
            "value": 12434,
            "range": "± 807",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/64",
            "value": 447267,
            "range": "± 30033",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/64",
            "value": 32886,
            "range": "± 2807",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/8",
            "value": 13232,
            "range": "± 853",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/8",
            "value": 5480,
            "range": "± 364",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/16",
            "value": 50138,
            "range": "± 3338",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/16",
            "value": 12877,
            "range": "± 807",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/32",
            "value": 268915,
            "range": "± 21883",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/32",
            "value": 32595,
            "range": "± 2914",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/64",
            "value": 1567906,
            "range": "± 87607",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/64",
            "value": 89161,
            "range": "± 4449",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/8",
            "value": 4930,
            "range": "± 327",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/8",
            "value": 2265,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/16",
            "value": 17818,
            "range": "± 799",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/16",
            "value": 5256,
            "range": "± 347",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/32",
            "value": 79785,
            "range": "± 4234",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/32",
            "value": 12487,
            "range": "± 825",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/64",
            "value": 450339,
            "range": "± 20053",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/64",
            "value": 31403,
            "range": "± 2025",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "91df1aa3e939dd1e5eeff449fad05b828c205bb1",
          "message": "Merge pull request #7 from WizardOfMenlo/random-elements-EG",
          "timestamp": "2020-06-15T15:42:14+02:00",
          "tree_id": "757bf094c1019bfdd28aa3ae8397df41907dc8df",
          "url": "https://github.com/WizardOfMenlo/stabchain/commit/91df1aa3e939dd1e5eeff449fad05b828c205bb1"
        },
        "date": 1592229914159,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 292,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 576,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1490,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 3040,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 6358,
            "range": "± 360",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 14084,
            "range": "± 604",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 30898,
            "range": "± 2286",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 164,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/8",
            "value": 235,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 198,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/16",
            "value": 286,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 269,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/32",
            "value": 381,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 401,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/64",
            "value": 519,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 629,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/128",
            "value": 782,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 1245,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/256",
            "value": 1485,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 2114,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/512",
            "value": 2745,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 76,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 105,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 117,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 132,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 196,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 323,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 519,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/8",
            "value": 937,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/8",
            "value": 1419,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/8",
            "value": 2443,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/16",
            "value": 1776,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/16",
            "value": 2818,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/16",
            "value": 5789,
            "range": "± 288",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/32",
            "value": 3347,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/32",
            "value": 5093,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/32",
            "value": 13472,
            "range": "± 736",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/64",
            "value": 6776,
            "range": "± 308",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/64",
            "value": 9917,
            "range": "± 456",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/64",
            "value": 35029,
            "range": "± 2089",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/8",
            "value": 1753,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/8",
            "value": 2712,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/8",
            "value": 5913,
            "range": "± 390",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/16",
            "value": 3432,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/16",
            "value": 5156,
            "range": "± 318",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/16",
            "value": 13837,
            "range": "± 639",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/32",
            "value": 7259,
            "range": "± 738",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/32",
            "value": 10130,
            "range": "± 521",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/32",
            "value": 36348,
            "range": "± 2010",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/64",
            "value": 13862,
            "range": "± 814",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/64",
            "value": 20606,
            "range": "± 1755",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/64",
            "value": 102914,
            "range": "± 6250",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/8",
            "value": 736,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/8",
            "value": 1216,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/8",
            "value": 2241,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/16",
            "value": 1394,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/16",
            "value": 2296,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/16",
            "value": 5440,
            "range": "± 466",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/32",
            "value": 2674,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/32",
            "value": 4319,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/32",
            "value": 13035,
            "range": "± 708",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/64",
            "value": 4932,
            "range": "± 317",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/64",
            "value": 8323,
            "range": "± 541",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/64",
            "value": 34908,
            "range": "± 2383",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/8",
            "value": 6260,
            "range": "± 372",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/8",
            "value": 2836,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/16",
            "value": 24234,
            "range": "± 1404",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/16",
            "value": 6513,
            "range": "± 469",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/32",
            "value": 109305,
            "range": "± 5754",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/32",
            "value": 14907,
            "range": "± 612",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/64",
            "value": 564189,
            "range": "± 27273",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/64",
            "value": 37739,
            "range": "± 3283",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/8",
            "value": 16038,
            "range": "± 852",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/8",
            "value": 6668,
            "range": "± 359",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/16",
            "value": 65709,
            "range": "± 3103",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/16",
            "value": 15030,
            "range": "± 728",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/32",
            "value": 302687,
            "range": "± 17489",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/32",
            "value": 38713,
            "range": "± 2252",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/64",
            "value": 2022365,
            "range": "± 117126",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/64",
            "value": 108415,
            "range": "± 6722",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/8",
            "value": 5912,
            "range": "± 295",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/8",
            "value": 2698,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/16",
            "value": 22529,
            "range": "± 1226",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/16",
            "value": 6798,
            "range": "± 533",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/32",
            "value": 108000,
            "range": "± 11534",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/32",
            "value": 15314,
            "range": "± 911",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/64",
            "value": 562838,
            "range": "± 37414",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/64",
            "value": 36977,
            "range": "± 2497",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "committer": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "distinct": true,
          "id": "0b273fd6f71819b217a4daa3b02419bf23c9d42d",
          "message": "Fix comment",
          "timestamp": "2020-06-15T16:05:34+02:00",
          "tree_id": "3c9d7adfd3a2a9ccf76a959f404175eb54eb0f81",
          "url": "https://github.com/WizardOfMenlo/stabchain/commit/0b273fd6f71819b217a4daa3b02419bf23c9d42d"
        },
        "date": 1592231323096,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 308,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 586,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1558,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 3256,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 7033,
            "range": "± 297",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 15484,
            "range": "± 886",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 33027,
            "range": "± 1537",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 164,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/8",
            "value": 223,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 187,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/16",
            "value": 313,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 247,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/32",
            "value": 356,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 387,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/64",
            "value": 520,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 629,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/128",
            "value": 792,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 1143,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/256",
            "value": 1451,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 2026,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/512",
            "value": 2633,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 80,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 100,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 126,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 132,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 189,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 296,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 539,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/8",
            "value": 930,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/8",
            "value": 1377,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/8",
            "value": 2408,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/16",
            "value": 1795,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/16",
            "value": 2714,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/16",
            "value": 5879,
            "range": "± 610",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/32",
            "value": 3393,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/32",
            "value": 5056,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/32",
            "value": 13504,
            "range": "± 798",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/64",
            "value": 6612,
            "range": "± 279",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/64",
            "value": 10024,
            "range": "± 431",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/64",
            "value": 35255,
            "range": "± 7180",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/8",
            "value": 1769,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/8",
            "value": 2663,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/8",
            "value": 5675,
            "range": "± 284",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/16",
            "value": 3445,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/16",
            "value": 5066,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/16",
            "value": 13584,
            "range": "± 627",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/32",
            "value": 6550,
            "range": "± 295",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/32",
            "value": 9909,
            "range": "± 760",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/32",
            "value": 35479,
            "range": "± 1572",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/64",
            "value": 13334,
            "range": "± 1234",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/64",
            "value": 19266,
            "range": "± 763",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/64",
            "value": 100120,
            "range": "± 4493",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/8",
            "value": 728,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/8",
            "value": 1191,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/8",
            "value": 2268,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/16",
            "value": 1401,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/16",
            "value": 2238,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/16",
            "value": 5168,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/32",
            "value": 2630,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/32",
            "value": 4190,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/32",
            "value": 12551,
            "range": "± 565",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/64",
            "value": 5098,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/64",
            "value": 8503,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/64",
            "value": 33429,
            "range": "± 1627",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/8",
            "value": 5730,
            "range": "± 289",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/8",
            "value": 2725,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/16",
            "value": 22152,
            "range": "± 1216",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/16",
            "value": 6378,
            "range": "± 400",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/32",
            "value": 96170,
            "range": "± 3539",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/32",
            "value": 14684,
            "range": "± 711",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/64",
            "value": 534725,
            "range": "± 23759",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/64",
            "value": 38287,
            "range": "± 1656",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/8",
            "value": 16016,
            "range": "± 776",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/8",
            "value": 6358,
            "range": "± 252",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/16",
            "value": 58412,
            "range": "± 2940",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/16",
            "value": 15204,
            "range": "± 897",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/32",
            "value": 290070,
            "range": "± 12525",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/32",
            "value": 38445,
            "range": "± 2742",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/64",
            "value": 1893398,
            "range": "± 52484",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/64",
            "value": 107656,
            "range": "± 4696",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/8",
            "value": 5792,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/8",
            "value": 2709,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/16",
            "value": 22588,
            "range": "± 984",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/16",
            "value": 6311,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/32",
            "value": 96013,
            "range": "± 2871",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/32",
            "value": 14264,
            "range": "± 708",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/64",
            "value": 547135,
            "range": "± 27361",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/64",
            "value": 37284,
            "range": "± 2026",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4a408e918ace0d6716b589564b9807e1bbfb9255",
          "message": "Merge pull request #10 from WizardOfMenlo/extra-tests-EG\n\nExtended Permutation and Factored Transversal Testing",
          "timestamp": "2020-06-16T16:52:52+02:00",
          "tree_id": "0168787524125e7cebda9afb5ab8f595929ec30b",
          "url": "https://github.com/WizardOfMenlo/stabchain/commit/4a408e918ace0d6716b589564b9807e1bbfb9255"
        },
        "date": 1592320527645,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 329,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 631,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1648,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 3462,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 7287,
            "range": "± 363",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 16154,
            "range": "± 797",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 34322,
            "range": "± 3161",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 171,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/8",
            "value": 232,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 206,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/16",
            "value": 308,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 265,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/32",
            "value": 382,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 389,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/64",
            "value": 559,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 648,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/128",
            "value": 852,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 1198,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/256",
            "value": 1557,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 2205,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/512",
            "value": 3193,
            "range": "± 326",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 82,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 111,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 121,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 158,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 242,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 369,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 583,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/8",
            "value": 950,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/8",
            "value": 1439,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/8",
            "value": 2767,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/16",
            "value": 1838,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/16",
            "value": 2783,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/16",
            "value": 6585,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/32",
            "value": 3523,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/32",
            "value": 5268,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/32",
            "value": 15241,
            "range": "± 523",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/64",
            "value": 6881,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/64",
            "value": 10246,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/64",
            "value": 39000,
            "range": "± 1752",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/8",
            "value": 1804,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/8",
            "value": 2769,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/8",
            "value": 6514,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/16",
            "value": 3501,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/16",
            "value": 5296,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/16",
            "value": 15156,
            "range": "± 761",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/32",
            "value": 6901,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/32",
            "value": 10592,
            "range": "± 689",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/32",
            "value": 39727,
            "range": "± 939",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/64",
            "value": 13771,
            "range": "± 688",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/64",
            "value": 20151,
            "range": "± 487",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/64",
            "value": 110026,
            "range": "± 2826",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/8",
            "value": 762,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/8",
            "value": 1237,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/8",
            "value": 2608,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/16",
            "value": 1462,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/16",
            "value": 2385,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/16",
            "value": 6191,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/32",
            "value": 2746,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/32",
            "value": 4566,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/32",
            "value": 14503,
            "range": "± 721",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/64",
            "value": 5325,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/64",
            "value": 8845,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/64",
            "value": 37871,
            "range": "± 831",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/8",
            "value": 6089,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/8",
            "value": 2952,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/16",
            "value": 22748,
            "range": "± 422",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/16",
            "value": 6771,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/32",
            "value": 100380,
            "range": "± 2776",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/32",
            "value": 15276,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/64",
            "value": 551423,
            "range": "± 12310",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/64",
            "value": 38977,
            "range": "± 578",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/8",
            "value": 16365,
            "range": "± 534",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/8",
            "value": 6655,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/16",
            "value": 60831,
            "range": "± 1142",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/16",
            "value": 15422,
            "range": "± 484",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/32",
            "value": 302300,
            "range": "± 11080",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/32",
            "value": 39572,
            "range": "± 1354",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/64",
            "value": 1914726,
            "range": "± 41266",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/64",
            "value": 109278,
            "range": "± 2934",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/8",
            "value": 5899,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/8",
            "value": 2786,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/16",
            "value": 22272,
            "range": "± 846",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/16",
            "value": 6446,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/32",
            "value": 99332,
            "range": "± 2383",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/32",
            "value": 14617,
            "range": "± 560",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/64",
            "value": 552908,
            "range": "± 16851",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/64",
            "value": 37960,
            "range": "± 1344",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "32061818+EwanGilligan@users.noreply.github.com",
            "name": "EwanGilligan",
            "username": "EwanGilligan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d2b28c5bc871dc5a8ebcc20ca7a424091cc6166",
          "message": "Factored Transversal refactor (#13)\n\n* changed variable names to be more clear\r\n\r\n* updated variable name for clarity",
          "timestamp": "2020-06-17T11:01:50+01:00",
          "tree_id": "26b98dca4b7c2446dc443325f070834d1c5d1cf0",
          "url": "https://github.com/WizardOfMenlo/stabchain/commit/7d2b28c5bc871dc5a8ebcc20ca7a424091cc6166"
        },
        "date": 1592389520183,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 346,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 683,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1774,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 3636,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 7640,
            "range": "± 351",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 17082,
            "range": "± 625",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 35991,
            "range": "± 1227",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 161,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/8",
            "value": 245,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 213,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/16",
            "value": 330,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 276,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/32",
            "value": 392,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 419,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/64",
            "value": 599,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 691,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/128",
            "value": 943,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 1304,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/256",
            "value": 1824,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 2314,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/permutation__prod_of_inv/512",
            "value": 3073,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 87,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 121,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 134,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 184,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 231,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 374,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 610,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/8",
            "value": 994,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/8",
            "value": 1526,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/8",
            "value": 2652,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/16",
            "value": 1917,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/16",
            "value": 2909,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/16",
            "value": 6471,
            "range": "± 310",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/32",
            "value": 3645,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/32",
            "value": 5703,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/32",
            "value": 14887,
            "range": "± 549",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/64",
            "value": 7238,
            "range": "± 272",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/64",
            "value": 10864,
            "range": "± 353",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/64",
            "value": 38470,
            "range": "± 1281",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/8",
            "value": 1917,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/8",
            "value": 2922,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/8",
            "value": 6166,
            "range": "± 296",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/16",
            "value": 3673,
            "range": "± 256",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/16",
            "value": 5624,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/16",
            "value": 14838,
            "range": "± 683",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/32",
            "value": 7248,
            "range": "± 327",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/32",
            "value": 10825,
            "range": "± 531",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/32",
            "value": 38872,
            "range": "± 1235",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/64",
            "value": 14272,
            "range": "± 327",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/64",
            "value": 21008,
            "range": "± 757",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/64",
            "value": 109934,
            "range": "± 5637",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/8",
            "value": 814,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/8",
            "value": 1318,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/8",
            "value": 2522,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/16",
            "value": 1514,
            "range": "± 772",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/16",
            "value": 2514,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/16",
            "value": 6039,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/32",
            "value": 2853,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/32",
            "value": 4809,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/32",
            "value": 14005,
            "range": "± 539",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/64",
            "value": 5551,
            "range": "± 273",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/64",
            "value": 9140,
            "range": "± 378",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/64",
            "value": 37044,
            "range": "± 1191",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/8",
            "value": 6263,
            "range": "± 358",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/8",
            "value": 3101,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/16",
            "value": 23962,
            "range": "± 5721",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/16",
            "value": 6976,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/32",
            "value": 104866,
            "range": "± 3054",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/32",
            "value": 16154,
            "range": "± 752",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/64",
            "value": 578020,
            "range": "± 20545",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/64",
            "value": 40731,
            "range": "± 1379",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/8",
            "value": 17314,
            "range": "± 756",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/8",
            "value": 7059,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/16",
            "value": 64306,
            "range": "± 2202",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/16",
            "value": 15944,
            "range": "± 807",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/32",
            "value": 316218,
            "range": "± 11071",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/32",
            "value": 42070,
            "range": "± 2268",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/64",
            "value": 2054654,
            "range": "± 67605",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/64",
            "value": 113963,
            "range": "± 4416",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/8",
            "value": 6166,
            "range": "± 385",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/8",
            "value": 2877,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/16",
            "value": 23321,
            "range": "± 745",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/16",
            "value": 6722,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/32",
            "value": 102942,
            "range": "± 3284",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/32",
            "value": 15239,
            "range": "± 655",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/64",
            "value": 579198,
            "range": "± 19676",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/64",
            "value": 39989,
            "range": "± 2118",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b3efd2aafb8ca081a36db7bd74d706c445ba4cb8",
          "message": "Merge pull request #11 from WizardOfMenlo/orbit_opt",
          "timestamp": "2020-06-17T12:38:25+02:00",
          "tree_id": "4b677abeb9ee0b4c2b3ae201f19ce8afe2508fd0",
          "url": "https://github.com/WizardOfMenlo/stabchain/commit/b3efd2aafb8ca081a36db7bd74d706c445ba4cb8"
        },
        "date": 1592392318584,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 294,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 550,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1628,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 3228,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 6892,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 15237,
            "range": "± 939",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 31054,
            "range": "± 1587",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 158,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/8",
            "value": 221,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 195,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/16",
            "value": 296,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 256,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/32",
            "value": 376,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 369,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/64",
            "value": 503,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 586,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/128",
            "value": 747,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 1090,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/256",
            "value": 1375,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 2037,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/512",
            "value": 2501,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 77,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 92,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 119,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 142,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 232,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 286,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 702,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/16",
            "value": 300,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/16",
            "value": 758,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/32",
            "value": 566,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/32",
            "value": 2137,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/64",
            "value": 1195,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/64",
            "value": 7176,
            "range": "± 417",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/128",
            "value": 2324,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/128",
            "value": 25614,
            "range": "± 1911",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/256",
            "value": 5727,
            "range": "± 327",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/256",
            "value": 101654,
            "range": "± 6983",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/512",
            "value": 12417,
            "range": "± 715",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/512",
            "value": 394957,
            "range": "± 17072",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/1024",
            "value": 27909,
            "range": "± 1554",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/1024",
            "value": 1453531,
            "range": "± 81233",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/1",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/1",
            "value": 1842,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/3",
            "value": 6048,
            "range": "± 283",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/3",
            "value": 8063,
            "range": "± 562",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/5",
            "value": 9142,
            "range": "± 517",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/5",
            "value": 14634,
            "range": "± 805",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/7",
            "value": 11969,
            "range": "± 578",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/7",
            "value": 21802,
            "range": "± 1248",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/9",
            "value": 12654,
            "range": "± 820",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/9",
            "value": 28551,
            "range": "± 1222",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/11",
            "value": 15493,
            "range": "± 762",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/11",
            "value": 32583,
            "range": "± 2196",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/13",
            "value": 15015,
            "range": "± 881",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/13",
            "value": 36612,
            "range": "± 2056",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/15",
            "value": 17991,
            "range": "± 869",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/15",
            "value": 43026,
            "range": "± 2563",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/8",
            "value": 916,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/8",
            "value": 1352,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/8",
            "value": 2444,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/16",
            "value": 1925,
            "range": "± 496",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/16",
            "value": 2526,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/16",
            "value": 5634,
            "range": "± 383",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/32",
            "value": 3597,
            "range": "± 288",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/32",
            "value": 4968,
            "range": "± 258",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/32",
            "value": 13711,
            "range": "± 654",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/64",
            "value": 6495,
            "range": "± 359",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/64",
            "value": 9467,
            "range": "± 482",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/64",
            "value": 34532,
            "range": "± 2404",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/8",
            "value": 1918,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/8",
            "value": 2772,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/8",
            "value": 5768,
            "range": "± 308",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/16",
            "value": 3219,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/16",
            "value": 5075,
            "range": "± 330",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/16",
            "value": 13128,
            "range": "± 1142",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/32",
            "value": 6647,
            "range": "± 328",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/32",
            "value": 10238,
            "range": "± 500",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/32",
            "value": 35787,
            "range": "± 2094",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/64",
            "value": 12530,
            "range": "± 813",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/64",
            "value": 18663,
            "range": "± 897",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/64",
            "value": 97446,
            "range": "± 4799",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/8",
            "value": 730,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/8",
            "value": 1243,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/8",
            "value": 2175,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/16",
            "value": 1387,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/16",
            "value": 2194,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/16",
            "value": 5637,
            "range": "± 306",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/32",
            "value": 2511,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/32",
            "value": 4144,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/32",
            "value": 13201,
            "range": "± 714",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/64",
            "value": 4999,
            "range": "± 258",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/64",
            "value": 8458,
            "range": "± 343",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/64",
            "value": 33705,
            "range": "± 2292",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/8",
            "value": 5670,
            "range": "± 334",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/8",
            "value": 2736,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/16",
            "value": 23212,
            "range": "± 1491",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/16",
            "value": 6383,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/32",
            "value": 96869,
            "range": "± 4422",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/32",
            "value": 14961,
            "range": "± 698",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/64",
            "value": 541945,
            "range": "± 32355",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/64",
            "value": 36486,
            "range": "± 2600",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/8",
            "value": 15319,
            "range": "± 829",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/8",
            "value": 6301,
            "range": "± 331",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/16",
            "value": 59994,
            "range": "± 2544",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/16",
            "value": 14674,
            "range": "± 835",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/32",
            "value": 282125,
            "range": "± 16611",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/32",
            "value": 37614,
            "range": "± 1818",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/64",
            "value": 1846890,
            "range": "± 129725",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/64",
            "value": 102755,
            "range": "± 5465",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/8",
            "value": 5402,
            "range": "± 361",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/8",
            "value": 2577,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/16",
            "value": 22320,
            "range": "± 926",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/16",
            "value": 6251,
            "range": "± 273",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/32",
            "value": 95013,
            "range": "± 20262",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/32",
            "value": 14601,
            "range": "± 1498",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/64",
            "value": 537538,
            "range": "± 33688",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/64",
            "value": 36031,
            "range": "± 1760",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/8",
            "value": 895,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/8",
            "value": 873,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/16",
            "value": 1810,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/16",
            "value": 1669,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/32",
            "value": 3390,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/32",
            "value": 3191,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/64",
            "value": 6329,
            "range": "± 440",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/64",
            "value": 6535,
            "range": "± 726",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/8",
            "value": 1121,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/8",
            "value": 1100,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/16",
            "value": 2081,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/16",
            "value": 2139,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/32",
            "value": 4111,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/32",
            "value": 3958,
            "range": "± 295",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/64",
            "value": 7903,
            "range": "± 430",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/64",
            "value": 8205,
            "range": "± 427",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/8",
            "value": 1660,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/8",
            "value": 791,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/16",
            "value": 6237,
            "range": "± 703",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/16",
            "value": 1769,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/32",
            "value": 23082,
            "range": "± 1515",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/32",
            "value": 3358,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/64",
            "value": 92262,
            "range": "± 6995",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/64",
            "value": 7147,
            "range": "± 379",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "445339c4e56f1f281d14ed29f15b26e608987ebd",
          "message": "Merge pull request #12 from WizardOfMenlo/fast_exponentiation",
          "timestamp": "2020-06-17T12:38:08+02:00",
          "tree_id": "ff8edaa0330cc28a78558785b342609a46683c4e",
          "url": "https://github.com/WizardOfMenlo/stabchain/commit/445339c4e56f1f281d14ed29f15b26e608987ebd"
        },
        "date": 1592392333402,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 323,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 600,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1656,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 3344,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 7006,
            "range": "± 335",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 15513,
            "range": "± 594",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 32934,
            "range": "± 1627",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 170,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/8",
            "value": 237,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 218,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/16",
            "value": 334,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 290,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/32",
            "value": 420,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 437,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/64",
            "value": 577,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 690,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/128",
            "value": 942,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 1302,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/256",
            "value": 1715,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 2379,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/512",
            "value": 3003,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 81,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 101,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 133,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 165,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 247,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 399,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 557,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/16",
            "value": 327,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/16",
            "value": 829,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/32",
            "value": 642,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/32",
            "value": 2456,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/64",
            "value": 1320,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/64",
            "value": 8382,
            "range": "± 748",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/128",
            "value": 2940,
            "range": "± 274",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/128",
            "value": 27912,
            "range": "± 2144",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/256",
            "value": 6743,
            "range": "± 521",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/256",
            "value": 117835,
            "range": "± 21285",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/512",
            "value": 14507,
            "range": "± 621",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/512",
            "value": 445300,
            "range": "± 27372",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/1024",
            "value": 32218,
            "range": "± 2269",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/1024",
            "value": 1756212,
            "range": "± 84920",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/1",
            "value": 20,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/1",
            "value": 2103,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/3",
            "value": 6885,
            "range": "± 485",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/3",
            "value": 8910,
            "range": "± 544",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/5",
            "value": 10510,
            "range": "± 648",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/5",
            "value": 15601,
            "range": "± 933",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/7",
            "value": 13231,
            "range": "± 725",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/7",
            "value": 22644,
            "range": "± 4228",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/9",
            "value": 13680,
            "range": "± 643",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/9",
            "value": 30385,
            "range": "± 2726",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/11",
            "value": 17396,
            "range": "± 942",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/11",
            "value": 35616,
            "range": "± 1877",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/13",
            "value": 16852,
            "range": "± 874",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/13",
            "value": 42695,
            "range": "± 2127",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/15",
            "value": 19684,
            "range": "± 1302",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/15",
            "value": 50852,
            "range": "± 2283",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/8",
            "value": 1005,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/8",
            "value": 1545,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/8",
            "value": 2566,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/16",
            "value": 1966,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/16",
            "value": 2957,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/16",
            "value": 6313,
            "range": "± 360",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/32",
            "value": 3620,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/32",
            "value": 5382,
            "range": "± 327",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/32",
            "value": 14508,
            "range": "± 1066",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/64",
            "value": 7391,
            "range": "± 896",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/64",
            "value": 11116,
            "range": "± 682",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/64",
            "value": 37465,
            "range": "± 3151",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/8",
            "value": 1873,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/8",
            "value": 2876,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/8",
            "value": 6266,
            "range": "± 395",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/16",
            "value": 3591,
            "range": "± 231",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/16",
            "value": 5369,
            "range": "± 366",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/16",
            "value": 15237,
            "range": "± 909",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/32",
            "value": 7092,
            "range": "± 620",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/32",
            "value": 10831,
            "range": "± 989",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/32",
            "value": 38597,
            "range": "± 1998",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/64",
            "value": 14002,
            "range": "± 989",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/64",
            "value": 20820,
            "range": "± 1263",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/64",
            "value": 113458,
            "range": "± 6407",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/8",
            "value": 876,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/8",
            "value": 1421,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/8",
            "value": 2804,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/16",
            "value": 1825,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/16",
            "value": 2730,
            "range": "± 337",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/16",
            "value": 6753,
            "range": "± 706",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/32",
            "value": 3220,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/32",
            "value": 5571,
            "range": "± 896",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/32",
            "value": 16556,
            "range": "± 1071",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/64",
            "value": 6508,
            "range": "± 572",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/64",
            "value": 10483,
            "range": "± 609",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/64",
            "value": 41869,
            "range": "± 2944",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/8",
            "value": 8009,
            "range": "± 482",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/8",
            "value": 3515,
            "range": "± 284",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/16",
            "value": 30842,
            "range": "± 2133",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/16",
            "value": 8129,
            "range": "± 647",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/32",
            "value": 141479,
            "range": "± 8470",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/32",
            "value": 19356,
            "range": "± 1999",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/64",
            "value": 737825,
            "range": "± 56883",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/64",
            "value": 47911,
            "range": "± 3363",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/8",
            "value": 20806,
            "range": "± 1087",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/8",
            "value": 8191,
            "range": "± 635",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/16",
            "value": 78396,
            "range": "± 11561",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/16",
            "value": 18495,
            "range": "± 1046",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/32",
            "value": 382188,
            "range": "± 26794",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/32",
            "value": 47966,
            "range": "± 3611",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/64",
            "value": 2459223,
            "range": "± 112601",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/64",
            "value": 130748,
            "range": "± 9068",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/8",
            "value": 7367,
            "range": "± 647",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/8",
            "value": 3332,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/16",
            "value": 28322,
            "range": "± 1824",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/16",
            "value": 7722,
            "range": "± 352",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/32",
            "value": 126513,
            "range": "± 7628",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/32",
            "value": 17850,
            "range": "± 1115",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/64",
            "value": 695531,
            "range": "± 43844",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/64",
            "value": 48218,
            "range": "± 4404",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/8",
            "value": 1162,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/8",
            "value": 1087,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/16",
            "value": 2123,
            "range": "± 234",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/16",
            "value": 2185,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/32",
            "value": 4188,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/32",
            "value": 4242,
            "range": "± 404",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/64",
            "value": 7896,
            "range": "± 737",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/64",
            "value": 8175,
            "range": "± 488",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/8",
            "value": 1379,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/8",
            "value": 1261,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/16",
            "value": 2150,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/16",
            "value": 2239,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/32",
            "value": 4171,
            "range": "± 311",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/32",
            "value": 4343,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/64",
            "value": 8721,
            "range": "± 622",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/64",
            "value": 9263,
            "range": "± 628",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "32061818+EwanGilligan@users.noreply.github.com",
            "name": "EwanGilligan",
            "username": "EwanGilligan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "95dad57f760979845dd8ae77de3622a5e6042804",
          "message": "Merge pull request #14 from WizardOfMenlo/rng-fix\n\nRandom Permutation Generation Fix",
          "timestamp": "2020-06-17T11:57:16+01:00",
          "tree_id": "d84fec505798c46d7c4d259bec43ffae474cb7a5",
          "url": "https://github.com/WizardOfMenlo/stabchain/commit/95dad57f760979845dd8ae77de3622a5e6042804"
        },
        "date": 1592393510250,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 317,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 624,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1902,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 3489,
            "range": "± 272",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 7678,
            "range": "± 605",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 16209,
            "range": "± 865",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 34328,
            "range": "± 769",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 172,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/8",
            "value": 241,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 214,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/16",
            "value": 353,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 276,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/32",
            "value": 394,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 444,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/64",
            "value": 645,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 672,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/128",
            "value": 892,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 1203,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/256",
            "value": 1600,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 2070,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/512",
            "value": 2833,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 85,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 112,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 132,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 152,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 242,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 311,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 447,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/16",
            "value": 295,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/16",
            "value": 752,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/32",
            "value": 568,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/32",
            "value": 2185,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/64",
            "value": 1183,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/64",
            "value": 7352,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/128",
            "value": 2483,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/128",
            "value": 26126,
            "range": "± 2871",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/256",
            "value": 5959,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/256",
            "value": 107712,
            "range": "± 1959",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/512",
            "value": 13137,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/512",
            "value": 413633,
            "range": "± 9177",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/1024",
            "value": 28140,
            "range": "± 473",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/1024",
            "value": 1598024,
            "range": "± 23807",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/1",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/1",
            "value": 1966,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/3",
            "value": 6265,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/3",
            "value": 8203,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/5",
            "value": 9623,
            "range": "± 297",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/5",
            "value": 14520,
            "range": "± 276",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/7",
            "value": 12343,
            "range": "± 336",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/7",
            "value": 20913,
            "range": "± 376",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/9",
            "value": 12549,
            "range": "± 287",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/9",
            "value": 26930,
            "range": "± 592",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/11",
            "value": 15558,
            "range": "± 561",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/11",
            "value": 33283,
            "range": "± 2369",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/13",
            "value": 15540,
            "range": "± 411",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/13",
            "value": 39274,
            "range": "± 595",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/15",
            "value": 18343,
            "range": "± 582",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/15",
            "value": 45697,
            "range": "± 1681",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/8",
            "value": 966,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/8",
            "value": 1467,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/8",
            "value": 2541,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/16",
            "value": 1841,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/16",
            "value": 2815,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/16",
            "value": 6127,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/32",
            "value": 3517,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/32",
            "value": 5340,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/32",
            "value": 14300,
            "range": "± 388",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/64",
            "value": 6923,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/64",
            "value": 10368,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/64",
            "value": 36800,
            "range": "± 2473",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/8",
            "value": 1819,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/8",
            "value": 2785,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/8",
            "value": 6132,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/16",
            "value": 3531,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/16",
            "value": 5335,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/16",
            "value": 14276,
            "range": "± 1295",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/32",
            "value": 6950,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/32",
            "value": 10372,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/32",
            "value": 37191,
            "range": "± 519",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/64",
            "value": 13634,
            "range": "± 234",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/64",
            "value": 20264,
            "range": "± 343",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/64",
            "value": 105806,
            "range": "± 2170",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/8",
            "value": 770,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/8",
            "value": 1267,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/8",
            "value": 2392,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/16",
            "value": 1455,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/16",
            "value": 2431,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/16",
            "value": 5716,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/32",
            "value": 2720,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/32",
            "value": 4708,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/32",
            "value": 13577,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/64",
            "value": 5305,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/64",
            "value": 8798,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/64",
            "value": 35413,
            "range": "± 760",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/8",
            "value": 6102,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/8",
            "value": 2920,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/16",
            "value": 22844,
            "range": "± 460",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/16",
            "value": 6757,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/32",
            "value": 100180,
            "range": "± 5067",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/32",
            "value": 15195,
            "range": "± 480",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/64",
            "value": 558955,
            "range": "± 16175",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/64",
            "value": 39284,
            "range": "± 928",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/8",
            "value": 16786,
            "range": "± 355",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/8",
            "value": 6950,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/16",
            "value": 62313,
            "range": "± 1451",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/16",
            "value": 15558,
            "range": "± 421",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/32",
            "value": 303976,
            "range": "± 15713",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/32",
            "value": 40309,
            "range": "± 981",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/64",
            "value": 1933474,
            "range": "± 34763",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/64",
            "value": 109947,
            "range": "± 2080",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/8",
            "value": 5940,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/8",
            "value": 2754,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/16",
            "value": 22571,
            "range": "± 361",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/16",
            "value": 6402,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/32",
            "value": 98532,
            "range": "± 5412",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/32",
            "value": 14629,
            "range": "± 296",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/64",
            "value": 557596,
            "range": "± 10526",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/64",
            "value": 38073,
            "range": "± 1038",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/8",
            "value": 959,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/8",
            "value": 903,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/16",
            "value": 1839,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/16",
            "value": 1787,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/32",
            "value": 3528,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/32",
            "value": 3425,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/64",
            "value": 6909,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/64",
            "value": 6832,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/8",
            "value": 1175,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/8",
            "value": 1179,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/16",
            "value": 2238,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/16",
            "value": 2261,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/32",
            "value": 4331,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/32",
            "value": 4335,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/64",
            "value": 8509,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/64",
            "value": 8634,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/8",
            "value": 1716,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/8",
            "value": 873,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/16",
            "value": 6846,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/16",
            "value": 1855,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/32",
            "value": 25716,
            "range": "± 557",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/32",
            "value": 3712,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/64",
            "value": 100942,
            "range": "± 3833",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/64",
            "value": 7261,
            "range": "± 183",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3cad19a3e026e7e5154c4aa189ffd072f4cb0cff",
          "message": "Merge pull request #16 from WizardOfMenlo/direct_product",
          "timestamp": "2020-06-17T19:18:29+02:00",
          "tree_id": "d84db60a1948d8cff2a4856b26514444991f74ca",
          "url": "https://github.com/WizardOfMenlo/stabchain/commit/3cad19a3e026e7e5154c4aa189ffd072f4cb0cff"
        },
        "date": 1592416369992,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 326,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 618,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1634,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 3420,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 7206,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 16060,
            "range": "± 579",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 34037,
            "range": "± 796",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 172,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/8",
            "value": 234,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 208,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/16",
            "value": 310,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 260,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/32",
            "value": 379,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 377,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/64",
            "value": 509,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 634,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/128",
            "value": 845,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 1161,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/256",
            "value": 1464,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 2030,
            "range": "± 427",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/512",
            "value": 2653,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 83,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 111,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 113,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 145,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 197,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 281,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 439,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/16",
            "value": 298,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/16",
            "value": 787,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/32",
            "value": 568,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/32",
            "value": 2237,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/64",
            "value": 1196,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/64",
            "value": 7394,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/128",
            "value": 2507,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/128",
            "value": 26265,
            "range": "± 5215",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/256",
            "value": 5989,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/256",
            "value": 108154,
            "range": "± 2468",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/512",
            "value": 13197,
            "range": "± 1444",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/512",
            "value": 414052,
            "range": "± 5344",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/1024",
            "value": 28304,
            "range": "± 1307",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/1024",
            "value": 1622286,
            "range": "± 43312",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/1",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/1",
            "value": 1987,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/3",
            "value": 6287,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/3",
            "value": 8285,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/5",
            "value": 9597,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/5",
            "value": 14597,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/7",
            "value": 12322,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/7",
            "value": 21003,
            "range": "± 589",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/9",
            "value": 12829,
            "range": "± 281",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/9",
            "value": 28512,
            "range": "± 777",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/11",
            "value": 15991,
            "range": "± 327",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/11",
            "value": 34909,
            "range": "± 645",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/13",
            "value": 16028,
            "range": "± 441",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/13",
            "value": 42003,
            "range": "± 728",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/15",
            "value": 18528,
            "range": "± 455",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/15",
            "value": 48991,
            "range": "± 3086",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/8",
            "value": 986,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/8",
            "value": 1429,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/8",
            "value": 2536,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/16",
            "value": 1900,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/16",
            "value": 2776,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/16",
            "value": 6087,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/32",
            "value": 3548,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/32",
            "value": 5353,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/32",
            "value": 14027,
            "range": "± 515",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/64",
            "value": 7210,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/64",
            "value": 11011,
            "range": "± 460",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/64",
            "value": 36720,
            "range": "± 2841",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/8",
            "value": 1869,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/8",
            "value": 2764,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/8",
            "value": 6000,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/16",
            "value": 3551,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/16",
            "value": 5359,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/16",
            "value": 13942,
            "range": "± 289",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/32",
            "value": 6977,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/32",
            "value": 10499,
            "range": "± 365",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/32",
            "value": 37448,
            "range": "± 781",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/64",
            "value": 13931,
            "range": "± 371",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/64",
            "value": 20587,
            "range": "± 555",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/64",
            "value": 105657,
            "range": "± 2569",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/8",
            "value": 791,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/8",
            "value": 1246,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/8",
            "value": 2370,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/16",
            "value": 1553,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/16",
            "value": 2418,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/16",
            "value": 5704,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/32",
            "value": 2859,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/32",
            "value": 4534,
            "range": "± 379",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/32",
            "value": 13347,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/64",
            "value": 5470,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/64",
            "value": 8858,
            "range": "± 331",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/64",
            "value": 35534,
            "range": "± 1488",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/8",
            "value": 6158,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/8",
            "value": 2912,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/16",
            "value": 23007,
            "range": "± 587",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/16",
            "value": 6679,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/32",
            "value": 100594,
            "range": "± 4400",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/32",
            "value": 15402,
            "range": "± 360",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/64",
            "value": 557161,
            "range": "± 88183",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/64",
            "value": 39106,
            "range": "± 714",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/8",
            "value": 16309,
            "range": "± 576",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/8",
            "value": 6859,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/16",
            "value": 61160,
            "range": "± 1518",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/16",
            "value": 15538,
            "range": "± 286",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/32",
            "value": 302736,
            "range": "± 4850",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/32",
            "value": 39932,
            "range": "± 1474",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/64",
            "value": 1939007,
            "range": "± 38171",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/64",
            "value": 109195,
            "range": "± 2696",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/8",
            "value": 5899,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/8",
            "value": 2768,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/16",
            "value": 22132,
            "range": "± 868",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/16",
            "value": 6482,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/32",
            "value": 99494,
            "range": "± 2708",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/32",
            "value": 14949,
            "range": "± 386",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/64",
            "value": 559157,
            "range": "± 15150",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/64",
            "value": 37698,
            "range": "± 1422",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/8",
            "value": 954,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/8",
            "value": 908,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/16",
            "value": 1919,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/16",
            "value": 1864,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/32",
            "value": 3649,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/32",
            "value": 3582,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/64",
            "value": 7039,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/64",
            "value": 6935,
            "range": "± 317",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/8",
            "value": 1213,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/8",
            "value": 1200,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/16",
            "value": 2422,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/16",
            "value": 2400,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/32",
            "value": 4625,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/32",
            "value": 4565,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/64",
            "value": 9049,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/64",
            "value": 9044,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/8",
            "value": 1705,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/8",
            "value": 854,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/16",
            "value": 6980,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/16",
            "value": 1949,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/32",
            "value": 25786,
            "range": "± 660",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/32",
            "value": 3718,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/64",
            "value": 101183,
            "range": "± 3153",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/64",
            "value": 7220,
            "range": "± 140",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30c33d07c339cc894dc98aaae01d42ea43692488",
          "message": "Merge pull request #15 from WizardOfMenlo/dihedral\n\nFixed dihedral",
          "timestamp": "2020-06-17T19:18:42+02:00",
          "tree_id": "4712c32bf935787b9db1606e676a637d085d6b9c",
          "url": "https://github.com/WizardOfMenlo/stabchain/commit/30c33d07c339cc894dc98aaae01d42ea43692488"
        },
        "date": 1592416398783,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 336,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 629,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1724,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 3553,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 7558,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 16660,
            "range": "± 780",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 35577,
            "range": "± 15291",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 178,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/8",
            "value": 237,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 205,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/16",
            "value": 328,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 268,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/32",
            "value": 415,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 389,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/64",
            "value": 524,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 647,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/128",
            "value": 872,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 1207,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/256",
            "value": 1866,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 2088,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/512",
            "value": 2738,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 116,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 124,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 174,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 202,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 488,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 454,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/16",
            "value": 317,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/16",
            "value": 801,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/32",
            "value": 591,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/32",
            "value": 2268,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/64",
            "value": 1248,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/64",
            "value": 7635,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/128",
            "value": 2603,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/128",
            "value": 27157,
            "range": "± 671",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/256",
            "value": 6172,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/256",
            "value": 110784,
            "range": "± 2554",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/512",
            "value": 13603,
            "range": "± 666",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/512",
            "value": 427239,
            "range": "± 10185",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/1024",
            "value": 29265,
            "range": "± 624",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/1024",
            "value": 1659063,
            "range": "± 38356",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/1",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/1",
            "value": 2027,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/3",
            "value": 6244,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/3",
            "value": 8432,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/5",
            "value": 9618,
            "range": "± 321",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/5",
            "value": 14985,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/7",
            "value": 12519,
            "range": "± 579",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/7",
            "value": 21494,
            "range": "± 578",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/9",
            "value": 12749,
            "range": "± 547",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/9",
            "value": 27876,
            "range": "± 642",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/11",
            "value": 15857,
            "range": "± 353",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/11",
            "value": 34374,
            "range": "± 847",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/13",
            "value": 16057,
            "range": "± 412",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/13",
            "value": 41045,
            "range": "± 2222",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/15",
            "value": 19018,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/15",
            "value": 47502,
            "range": "± 732",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/8",
            "value": 989,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/8",
            "value": 1479,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/8",
            "value": 2565,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/16",
            "value": 1905,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/16",
            "value": 2868,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/16",
            "value": 6216,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/32",
            "value": 3641,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/32",
            "value": 5471,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/32",
            "value": 14371,
            "range": "± 392",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/64",
            "value": 7175,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/64",
            "value": 10752,
            "range": "± 583",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/64",
            "value": 37718,
            "range": "± 977",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/8",
            "value": 1876,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/8",
            "value": 2826,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/8",
            "value": 6088,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/16",
            "value": 3697,
            "range": "± 280",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/16",
            "value": 5499,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/16",
            "value": 14249,
            "range": "± 430",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/32",
            "value": 7266,
            "range": "± 428",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/32",
            "value": 10727,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/32",
            "value": 37796,
            "range": "± 989",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/64",
            "value": 14378,
            "range": "± 231",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/64",
            "value": 20798,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/64",
            "value": 108167,
            "range": "± 3395",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/8",
            "value": 801,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/8",
            "value": 1281,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/8",
            "value": 2447,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/16",
            "value": 1509,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/16",
            "value": 2447,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/16",
            "value": 5938,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/32",
            "value": 2834,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/32",
            "value": 4639,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/32",
            "value": 13937,
            "range": "± 417",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/64",
            "value": 5649,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/64",
            "value": 9033,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/64",
            "value": 36551,
            "range": "± 1357",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/8",
            "value": 6268,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/8",
            "value": 3010,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/16",
            "value": 23606,
            "range": "± 450",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/16",
            "value": 6822,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/32",
            "value": 103525,
            "range": "± 2873",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/32",
            "value": 15484,
            "range": "± 355",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/64",
            "value": 575927,
            "range": "± 34704",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/64",
            "value": 40622,
            "range": "± 1348",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/8",
            "value": 16303,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/8",
            "value": 6815,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/16",
            "value": 56282,
            "range": "± 747",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/16",
            "value": 15977,
            "range": "± 373",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/32",
            "value": 256013,
            "range": "± 10648",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/32",
            "value": 41082,
            "range": "± 975",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/64",
            "value": 1571774,
            "range": "± 41026",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/64",
            "value": 111900,
            "range": "± 3748",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/8",
            "value": 6032,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/8",
            "value": 2915,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/16",
            "value": 23081,
            "range": "± 1257",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/16",
            "value": 6562,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/32",
            "value": 102654,
            "range": "± 1467",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/32",
            "value": 15470,
            "range": "± 629",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/64",
            "value": 574772,
            "range": "± 10138",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/64",
            "value": 39232,
            "range": "± 1317",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/8",
            "value": 984,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/8",
            "value": 934,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/16",
            "value": 1921,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/16",
            "value": 1843,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/32",
            "value": 3654,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/32",
            "value": 3550,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/64",
            "value": 7298,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/64",
            "value": 7149,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/8",
            "value": 1221,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/8",
            "value": 1212,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/16",
            "value": 2317,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/16",
            "value": 2320,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/32",
            "value": 4439,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/32",
            "value": 4449,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/64",
            "value": 8801,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/64",
            "value": 8797,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/8",
            "value": 1847,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/8",
            "value": 897,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/16",
            "value": 7022,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/16",
            "value": 1873,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/32",
            "value": 26767,
            "range": "± 567",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/32",
            "value": 3757,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/64",
            "value": 104366,
            "range": "± 4044",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/64",
            "value": 7506,
            "range": "± 263",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ce1aac08917d51f78cdd4dd9dceb4ecb547f4e8a",
          "message": "Merge pull request #19 from WizardOfMenlo/group_display",
          "timestamp": "2020-06-22T11:45:04+02:00",
          "tree_id": "ebc7abb409ae7d69eb11ea67b706b8b594d8d316",
          "url": "https://github.com/WizardOfMenlo/stabchain/commit/ce1aac08917d51f78cdd4dd9dceb4ecb547f4e8a"
        },
        "date": 1592821645815,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 287,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 541,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1501,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 3167,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 6776,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 15072,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 32369,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 141,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/8",
            "value": 193,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 172,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/16",
            "value": 263,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 218,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/32",
            "value": 329,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 357,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/64",
            "value": 502,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 540,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/128",
            "value": 675,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 984,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/256",
            "value": 1260,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 1707,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/512",
            "value": 2244,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 68,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 85,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 114,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 137,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 190,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 271,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 391,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/16",
            "value": 253,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/16",
            "value": 648,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/32",
            "value": 476,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/32",
            "value": 1842,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/64",
            "value": 1023,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/64",
            "value": 6252,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/128",
            "value": 2118,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/128",
            "value": 21987,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/256",
            "value": 4923,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/256",
            "value": 91388,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/512",
            "value": 10753,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/512",
            "value": 342224,
            "range": "± 327",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/1024",
            "value": 23752,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/1024",
            "value": 1378745,
            "range": "± 12322",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/1",
            "value": 17,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/1",
            "value": 1618,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/3",
            "value": 5158,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/3",
            "value": 6761,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/5",
            "value": 7878,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/5",
            "value": 11913,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/7",
            "value": 10144,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/7",
            "value": 17648,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/9",
            "value": 10764,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/9",
            "value": 23372,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/11",
            "value": 13244,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/11",
            "value": 27336,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/13",
            "value": 12956,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/13",
            "value": 31622,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/15",
            "value": 15908,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/15",
            "value": 36457,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/8",
            "value": 797,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/8",
            "value": 1188,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/8",
            "value": 2102,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/16",
            "value": 1555,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/16",
            "value": 2344,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/16",
            "value": 5065,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/32",
            "value": 2955,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/32",
            "value": 4366,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/32",
            "value": 11618,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/64",
            "value": 5892,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/64",
            "value": 8473,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/64",
            "value": 30754,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/8",
            "value": 795,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/8",
            "value": 1211,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/8",
            "value": 2057,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/16",
            "value": 1492,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/16",
            "value": 2319,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/16",
            "value": 4979,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/32",
            "value": 2874,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/32",
            "value": 4472,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/32",
            "value": 11607,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/64",
            "value": 5769,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/64",
            "value": 8595,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/64",
            "value": 31070,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/8",
            "value": 634,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/8",
            "value": 1040,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/8",
            "value": 1908,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/16",
            "value": 1202,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/16",
            "value": 2001,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/16",
            "value": 4711,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/32",
            "value": 2272,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/32",
            "value": 3807,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/32",
            "value": 11189,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/64",
            "value": 4418,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/64",
            "value": 7283,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/64",
            "value": 29642,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/8",
            "value": 5112,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/8",
            "value": 2430,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/16",
            "value": 18953,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/16",
            "value": 5609,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/32",
            "value": 83084,
            "range": "± 296",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/32",
            "value": 12510,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/64",
            "value": 467072,
            "range": "± 8857",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/64",
            "value": 32466,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/8",
            "value": 4153,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/8",
            "value": 2433,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/16",
            "value": 13680,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/16",
            "value": 5727,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/32",
            "value": 50970,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/32",
            "value": 12744,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/64",
            "value": 254398,
            "range": "± 8515",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/64",
            "value": 32880,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/8",
            "value": 4921,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/8",
            "value": 2309,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/16",
            "value": 18714,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/16",
            "value": 5395,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/32",
            "value": 82561,
            "range": "± 239",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/32",
            "value": 12073,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/64",
            "value": 467039,
            "range": "± 567",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/64",
            "value": 31152,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/8",
            "value": 788,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/8",
            "value": 757,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/16",
            "value": 1522,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/16",
            "value": 1465,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/32",
            "value": 2935,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/32",
            "value": 2857,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/64",
            "value": 5750,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/64",
            "value": 5631,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/8",
            "value": 960,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/8",
            "value": 964,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/16",
            "value": 1836,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/16",
            "value": 1852,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/32",
            "value": 3557,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/32",
            "value": 3560,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/64",
            "value": 7072,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/64",
            "value": 7054,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/8",
            "value": 1435,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/8",
            "value": 713,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/16",
            "value": 5623,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/16",
            "value": 1497,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/32",
            "value": 21123,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/32",
            "value": 3042,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/64",
            "value": 82377,
            "range": "± 941",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/64",
            "value": 5957,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal/8",
            "value": 1834,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal_optmized/8",
            "value": 1799,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal/16",
            "value": 4568,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal_optmized/16",
            "value": 4519,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal/32",
            "value": 10478,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal_optmized/32",
            "value": 10455,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal/64",
            "value": 28463,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal_optmized/64",
            "value": 28435,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal/8",
            "value": 2295,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal_optmized/8",
            "value": 1685,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal/16",
            "value": 7669,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal_optmized/16",
            "value": 3765,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal/32",
            "value": 25847,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal_optmized/32",
            "value": 8574,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal/64",
            "value": 95245,
            "range": "± 424",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal_optmized/64",
            "value": 20872,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal/8",
            "value": 2062,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal_optmized/8",
            "value": 1997,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal/16",
            "value": 4765,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal_optmized/16",
            "value": 4815,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal/32",
            "value": 11448,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal_optmized/32",
            "value": 11376,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal/64",
            "value": 30040,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal_optmized/64",
            "value": 30117,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal/8",
            "value": 926,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal_optmized/8",
            "value": 897,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal/16",
            "value": 1802,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal_optmized/16",
            "value": 1793,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal/32",
            "value": 3439,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal_optmized/32",
            "value": 3437,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal/64",
            "value": 6474,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal_optmized/64",
            "value": 6617,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal/8",
            "value": 1591,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal_optmized/8",
            "value": 867,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal/16",
            "value": 5942,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal_optmized/16",
            "value": 1812,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal/32",
            "value": 21957,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal_optmized/32",
            "value": 3484,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal/64",
            "value": 84918,
            "range": "± 273",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal_optmized/64",
            "value": 6878,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal/8",
            "value": 1094,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal_optmized/8",
            "value": 1126,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal/16",
            "value": 2121,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal_optmized/16",
            "value": 2160,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal/32",
            "value": 4083,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal_optmized/32",
            "value": 4126,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal/64",
            "value": 7961,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal_optmized/64",
            "value": 7954,
            "range": "± 52",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ea66374f0b3319205fd28b970695cf25748bd99c",
          "message": "Merge pull request #17 from WizardOfMenlo/opt_transversal\n\nAdded optimization for other orbit algorithm",
          "timestamp": "2020-06-22T11:43:44+02:00",
          "tree_id": "c973e3207aaabf3e29e2540372b9e7308924f68e",
          "url": "https://github.com/WizardOfMenlo/stabchain/commit/ea66374f0b3319205fd28b970695cf25748bd99c"
        },
        "date": 1592821717653,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 308,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 586,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1560,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 3217,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 6868,
            "range": "± 268",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 15212,
            "range": "± 949",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 32017,
            "range": "± 1339",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 170,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/8",
            "value": 233,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 219,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/16",
            "value": 316,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 277,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/32",
            "value": 384,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 418,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/64",
            "value": 550,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 699,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/128",
            "value": 819,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 1218,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/256",
            "value": 1673,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 2359,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/512",
            "value": 3002,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 77,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 109,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 127,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 156,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 237,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 376,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 534,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/16",
            "value": 304,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/16",
            "value": 802,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/32",
            "value": 624,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/32",
            "value": 2400,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/64",
            "value": 1235,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/64",
            "value": 7922,
            "range": "± 299",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/128",
            "value": 2648,
            "range": "± 590",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/128",
            "value": 27960,
            "range": "± 1024",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/256",
            "value": 6171,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/256",
            "value": 111654,
            "range": "± 5008",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/512",
            "value": 14457,
            "range": "± 793",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/512",
            "value": 449095,
            "range": "± 16920",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/1024",
            "value": 29979,
            "range": "± 1294",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/1024",
            "value": 1711088,
            "range": "± 48841",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/1",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/1",
            "value": 1975,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/3",
            "value": 6432,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/3",
            "value": 8645,
            "range": "± 349",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/5",
            "value": 9961,
            "range": "± 395",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/5",
            "value": 15349,
            "range": "± 633",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/7",
            "value": 12914,
            "range": "± 449",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/7",
            "value": 22931,
            "range": "± 916",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/9",
            "value": 14020,
            "range": "± 594",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/9",
            "value": 29895,
            "range": "± 1130",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/11",
            "value": 17173,
            "range": "± 776",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/11",
            "value": 37772,
            "range": "± 1621",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/13",
            "value": 16593,
            "range": "± 1106",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/13",
            "value": 42597,
            "range": "± 1738",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/15",
            "value": 20397,
            "range": "± 757",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/15",
            "value": 48108,
            "range": "± 2747",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/8",
            "value": 957,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/8",
            "value": 1569,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/8",
            "value": 2776,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/16",
            "value": 1975,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/16",
            "value": 3178,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/16",
            "value": 6708,
            "range": "± 367",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/32",
            "value": 3751,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/32",
            "value": 6150,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/32",
            "value": 15598,
            "range": "± 751",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/64",
            "value": 7425,
            "range": "± 448",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/64",
            "value": 11706,
            "range": "± 518",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/64",
            "value": 41080,
            "range": "± 2542",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/8",
            "value": 1940,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/8",
            "value": 3137,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/8",
            "value": 6616,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/16",
            "value": 3774,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/16",
            "value": 6084,
            "range": "± 298",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/16",
            "value": 15756,
            "range": "± 757",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/32",
            "value": 6999,
            "range": "± 454",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/32",
            "value": 11992,
            "range": "± 512",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/32",
            "value": 39059,
            "range": "± 2447",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/64",
            "value": 13681,
            "range": "± 549",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/64",
            "value": 21514,
            "range": "± 638",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/64",
            "value": 115378,
            "range": "± 3830",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/8",
            "value": 749,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/8",
            "value": 1330,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/8",
            "value": 2413,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/16",
            "value": 1465,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/16",
            "value": 2437,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/16",
            "value": 5721,
            "range": "± 276",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/32",
            "value": 2713,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/32",
            "value": 4663,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/32",
            "value": 13742,
            "range": "± 462",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/64",
            "value": 5415,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/64",
            "value": 9114,
            "range": "± 413",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/64",
            "value": 36237,
            "range": "± 1414",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/8",
            "value": 6331,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/8",
            "value": 2997,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/16",
            "value": 26307,
            "range": "± 1222",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/16",
            "value": 6746,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/32",
            "value": 110798,
            "range": "± 6218",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/32",
            "value": 15612,
            "range": "± 657",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/64",
            "value": 600229,
            "range": "± 17956",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/64",
            "value": 39719,
            "range": "± 1932",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/8",
            "value": 16823,
            "range": "± 636",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/8",
            "value": 6668,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/16",
            "value": 58111,
            "range": "± 3311",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/16",
            "value": 16127,
            "range": "± 676",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/32",
            "value": 262307,
            "range": "± 9503",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/32",
            "value": 41363,
            "range": "± 2100",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/64",
            "value": 1602617,
            "range": "± 45598",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/64",
            "value": 115400,
            "range": "± 4272",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/8",
            "value": 5852,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/8",
            "value": 2839,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/16",
            "value": 22681,
            "range": "± 989",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/16",
            "value": 6314,
            "range": "± 255",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/32",
            "value": 107167,
            "range": "± 3800",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/32",
            "value": 14752,
            "range": "± 790",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/64",
            "value": 562157,
            "range": "± 35731",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/64",
            "value": 37464,
            "range": "± 2271",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/8",
            "value": 988,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/8",
            "value": 901,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/16",
            "value": 1869,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/16",
            "value": 1712,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/32",
            "value": 3430,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/32",
            "value": 3278,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/64",
            "value": 6594,
            "range": "± 413",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/64",
            "value": 6453,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/8",
            "value": 1095,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/8",
            "value": 1145,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/16",
            "value": 2152,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/16",
            "value": 2203,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/32",
            "value": 4100,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/32",
            "value": 4232,
            "range": "± 299",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/64",
            "value": 8455,
            "range": "± 360",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/64",
            "value": 8786,
            "range": "± 399",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/8",
            "value": 1715,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/8",
            "value": 873,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/16",
            "value": 6929,
            "range": "± 473",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/16",
            "value": 1902,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/32",
            "value": 25979,
            "range": "± 921",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/32",
            "value": 3683,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/64",
            "value": 99928,
            "range": "± 4121",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/64",
            "value": 7442,
            "range": "± 283",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal/8",
            "value": 2242,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal_optmized/8",
            "value": 2211,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal/16",
            "value": 5650,
            "range": "± 381",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal_optmized/16",
            "value": 5649,
            "range": "± 286",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal/32",
            "value": 13370,
            "range": "± 596",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal_optmized/32",
            "value": 13343,
            "range": "± 661",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal/64",
            "value": 36044,
            "range": "± 2424",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal_optmized/64",
            "value": 35669,
            "range": "± 1470",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal/8",
            "value": 2919,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal_optmized/8",
            "value": 2089,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal/16",
            "value": 9964,
            "range": "± 526",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal_optmized/16",
            "value": 4729,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal/32",
            "value": 33997,
            "range": "± 1520",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal_optmized/32",
            "value": 10435,
            "range": "± 425",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal/64",
            "value": 131292,
            "range": "± 5331",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal_optmized/64",
            "value": 25106,
            "range": "± 1207",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal/8",
            "value": 2614,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal_optmized/8",
            "value": 2392,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal/16",
            "value": 5790,
            "range": "± 263",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal_optmized/16",
            "value": 5706,
            "range": "± 337",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal/32",
            "value": 13731,
            "range": "± 570",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal_optmized/32",
            "value": 13437,
            "range": "± 1011",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal/64",
            "value": 36385,
            "range": "± 2841",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal_optmized/64",
            "value": 36580,
            "range": "± 2296",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal/8",
            "value": 1082,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal_optmized/8",
            "value": 1089,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal/16",
            "value": 2058,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal_optmized/16",
            "value": 2102,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal/32",
            "value": 3930,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal_optmized/32",
            "value": 4075,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal/64",
            "value": 7623,
            "range": "± 402",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal_optmized/64",
            "value": 8037,
            "range": "± 435",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal/8",
            "value": 1858,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal_optmized/8",
            "value": 1023,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal/16",
            "value": 7265,
            "range": "± 720",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal_optmized/16",
            "value": 2199,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal/32",
            "value": 28256,
            "range": "± 1474",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal_optmized/32",
            "value": 4470,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal/64",
            "value": 111023,
            "range": "± 5155",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal_optmized/64",
            "value": 8493,
            "range": "± 443",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal/8",
            "value": 1430,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal_optmized/8",
            "value": 1332,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal/16",
            "value": 2738,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal_optmized/16",
            "value": 2511,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal/32",
            "value": 5135,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal_optmized/32",
            "value": 4898,
            "range": "± 358",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal/64",
            "value": 9936,
            "range": "± 503",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal_optmized/64",
            "value": 9339,
            "range": "± 553",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "158508d442f5574f5b00d173e51b5852d39ff019",
          "message": "Merge pull request #20 from WizardOfMenlo/randomperm\n\nReally add random perm",
          "timestamp": "2020-06-22T11:44:00+02:00",
          "tree_id": "c3b5222d2a74caf3e46ab8fcfc59e5a9c1ba0c14",
          "url": "https://github.com/WizardOfMenlo/stabchain/commit/158508d442f5574f5b00d173e51b5852d39ff019"
        },
        "date": 1592821755105,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 330,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 623,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1715,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 3553,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 7467,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 16547,
            "range": "± 683",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 35288,
            "range": "± 769",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 178,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/8",
            "value": 241,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 203,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/16",
            "value": 316,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 274,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/32",
            "value": 396,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 404,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/64",
            "value": 564,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 690,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/128",
            "value": 932,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 1284,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/256",
            "value": 1669,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 2300,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/512",
            "value": 3031,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 107,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 126,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 157,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 231,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 369,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 608,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/16",
            "value": 309,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/16",
            "value": 787,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/32",
            "value": 591,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/32",
            "value": 2270,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/64",
            "value": 1249,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/64",
            "value": 7689,
            "range": "± 455",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/128",
            "value": 2585,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/128",
            "value": 27094,
            "range": "± 724",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/256",
            "value": 6221,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/256",
            "value": 111863,
            "range": "± 2480",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/512",
            "value": 13663,
            "range": "± 282",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/512",
            "value": 429343,
            "range": "± 18247",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/1024",
            "value": 29212,
            "range": "± 690",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/1024",
            "value": 1653968,
            "range": "± 23176",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/1",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/1",
            "value": 2040,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/3",
            "value": 6503,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/3",
            "value": 8505,
            "range": "± 849",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/5",
            "value": 9870,
            "range": "± 324",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/5",
            "value": 14964,
            "range": "± 280",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/7",
            "value": 12770,
            "range": "± 322",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/7",
            "value": 21455,
            "range": "± 1598",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/9",
            "value": 12992,
            "range": "± 448",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/9",
            "value": 27908,
            "range": "± 752",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/11",
            "value": 16140,
            "range": "± 404",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/11",
            "value": 34362,
            "range": "± 615",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/13",
            "value": 16133,
            "range": "± 891",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/13",
            "value": 40796,
            "range": "± 608",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/15",
            "value": 19010,
            "range": "± 641",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/15",
            "value": 47298,
            "range": "± 1811",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/8",
            "value": 991,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/8",
            "value": 1508,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/8",
            "value": 2656,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/16",
            "value": 1939,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/16",
            "value": 2904,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/16",
            "value": 6416,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/32",
            "value": 3701,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/32",
            "value": 5545,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/32",
            "value": 14694,
            "range": "± 522",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/64",
            "value": 7204,
            "range": "± 481",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/64",
            "value": 10688,
            "range": "± 721",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/64",
            "value": 37857,
            "range": "± 2845",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/8",
            "value": 1887,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/8",
            "value": 2869,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/8",
            "value": 6182,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/16",
            "value": 3719,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/16",
            "value": 5490,
            "range": "± 238",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/16",
            "value": 14322,
            "range": "± 470",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/32",
            "value": 7286,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/32",
            "value": 10711,
            "range": "± 484",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/32",
            "value": 38418,
            "range": "± 1312",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/64",
            "value": 14336,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/64",
            "value": 20897,
            "range": "± 1293",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/64",
            "value": 108994,
            "range": "± 2193",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/8",
            "value": 806,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/8",
            "value": 1301,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/8",
            "value": 2474,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/16",
            "value": 1519,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/16",
            "value": 2461,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/16",
            "value": 6044,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/32",
            "value": 2841,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/32",
            "value": 4684,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/32",
            "value": 14063,
            "range": "± 414",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/64",
            "value": 5547,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/64",
            "value": 9074,
            "range": "± 287",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/64",
            "value": 36816,
            "range": "± 676",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/8",
            "value": 6506,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/8",
            "value": 3050,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/16",
            "value": 23930,
            "range": "± 597",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/16",
            "value": 6945,
            "range": "± 722",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/32",
            "value": 103229,
            "range": "± 3514",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/32",
            "value": 15865,
            "range": "± 350",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/64",
            "value": 574933,
            "range": "± 19215",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/64",
            "value": 40560,
            "range": "± 1133",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/8",
            "value": 16545,
            "range": "± 690",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/8",
            "value": 6706,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/16",
            "value": 56943,
            "range": "± 1380",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/16",
            "value": 15925,
            "range": "± 417",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/32",
            "value": 257043,
            "range": "± 10716",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/32",
            "value": 40723,
            "range": "± 1253",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/64",
            "value": 1564117,
            "range": "± 40764",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/64",
            "value": 111926,
            "range": "± 2142",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/8",
            "value": 6248,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/8",
            "value": 2868,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/16",
            "value": 23315,
            "range": "± 606",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/16",
            "value": 6449,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/32",
            "value": 102597,
            "range": "± 1049",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/32",
            "value": 15215,
            "range": "± 340",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/64",
            "value": 576177,
            "range": "± 15292",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/64",
            "value": 39105,
            "range": "± 4423",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/8",
            "value": 999,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/8",
            "value": 940,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/16",
            "value": 1907,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/16",
            "value": 1849,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/32",
            "value": 3660,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/32",
            "value": 3597,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/64",
            "value": 7185,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/64",
            "value": 7114,
            "range": "± 291",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/8",
            "value": 1205,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/8",
            "value": 1221,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/16",
            "value": 2306,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/16",
            "value": 2342,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/32",
            "value": 4449,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/32",
            "value": 4484,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/64",
            "value": 8806,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/64",
            "value": 8854,
            "range": "± 295",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/8",
            "value": 1774,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/8",
            "value": 905,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/16",
            "value": 7070,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/16",
            "value": 1884,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/32",
            "value": 26503,
            "range": "± 1386",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/32",
            "value": 3778,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/64",
            "value": 104709,
            "range": "± 7313",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/64",
            "value": 7551,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal/8",
            "value": 2250,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal_optmized/8",
            "value": 2239,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal/16",
            "value": 5630,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal_optmized/16",
            "value": 5635,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal/32",
            "value": 12936,
            "range": "± 768",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal_optmized/32",
            "value": 13169,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal/64",
            "value": 35353,
            "range": "± 1044",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal_optmized/64",
            "value": 35486,
            "range": "± 717",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal/8",
            "value": 2859,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal_optmized/8",
            "value": 2073,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal/16",
            "value": 9576,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal_optmized/16",
            "value": 4652,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal/32",
            "value": 32400,
            "range": "± 924",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal_optmized/32",
            "value": 10464,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal/64",
            "value": 118579,
            "range": "± 3621",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal_optmized/64",
            "value": 25263,
            "range": "± 726",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal/8",
            "value": 2515,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal_optmized/8",
            "value": 2560,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal/16",
            "value": 6060,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal_optmized/16",
            "value": 6100,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal/32",
            "value": 14517,
            "range": "± 464",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal_optmized/32",
            "value": 14380,
            "range": "± 387",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal/64",
            "value": 37373,
            "range": "± 1152",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal_optmized/64",
            "value": 37256,
            "range": "± 814",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal/8",
            "value": 1149,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal_optmized/8",
            "value": 1116,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal/16",
            "value": 2232,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal_optmized/16",
            "value": 2209,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal/32",
            "value": 4425,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal_optmized/32",
            "value": 4271,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal/64",
            "value": 8276,
            "range": "± 349",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal_optmized/64",
            "value": 8332,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal/8",
            "value": 1950,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal_optmized/8",
            "value": 1068,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal/16",
            "value": 7457,
            "range": "± 292",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal_optmized/16",
            "value": 2252,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal/32",
            "value": 27548,
            "range": "± 605",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal_optmized/32",
            "value": 4381,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal/64",
            "value": 106750,
            "range": "± 1929",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal_optmized/64",
            "value": 8690,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal/8",
            "value": 1390,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal_optmized/8",
            "value": 1420,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal/16",
            "value": 2648,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal_optmized/16",
            "value": 2676,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal/32",
            "value": 5204,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal_optmized/32",
            "value": 5148,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal/64",
            "value": 10020,
            "range": "± 551",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal_optmized/64",
            "value": 10026,
            "range": "± 190",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "432f9af8356e6cae06b702551f71dcc0a938fd76",
          "message": "Merge pull request #18 from WizardOfMenlo/dihedral_fix\n\nFixed dihedral",
          "timestamp": "2020-06-22T11:44:50+02:00",
          "tree_id": "a15b159d658377516eabfcb1a9441aba627ba351",
          "url": "https://github.com/WizardOfMenlo/stabchain/commit/432f9af8356e6cae06b702551f71dcc0a938fd76"
        },
        "date": 1592821904477,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 301,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 569,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1583,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 3216,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 6741,
            "range": "± 374",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 15872,
            "range": "± 1407",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 31950,
            "range": "± 2833",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 161,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/8",
            "value": 219,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 221,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/16",
            "value": 315,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 288,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/32",
            "value": 395,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 429,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/64",
            "value": 551,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 675,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/128",
            "value": 882,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 1270,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/256",
            "value": 1806,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 2210,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/512",
            "value": 2942,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 77,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 104,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 120,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 160,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 251,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 371,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 513,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/16",
            "value": 313,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/16",
            "value": 807,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/32",
            "value": 639,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/32",
            "value": 2485,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/64",
            "value": 1268,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/64",
            "value": 7981,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/128",
            "value": 2687,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/128",
            "value": 28299,
            "range": "± 1733",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/256",
            "value": 6402,
            "range": "± 410",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/256",
            "value": 114652,
            "range": "± 5859",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/512",
            "value": 15745,
            "range": "± 912",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/512",
            "value": 457795,
            "range": "± 20197",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/1024",
            "value": 30875,
            "range": "± 5504",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/1024",
            "value": 1748259,
            "range": "± 78930",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/1",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/1",
            "value": 2110,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/3",
            "value": 6927,
            "range": "± 428",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/3",
            "value": 8884,
            "range": "± 617",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/5",
            "value": 10566,
            "range": "± 735",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/5",
            "value": 15647,
            "range": "± 595",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/7",
            "value": 13382,
            "range": "± 802",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/7",
            "value": 22815,
            "range": "± 1306",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/9",
            "value": 13603,
            "range": "± 721",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/9",
            "value": 29155,
            "range": "± 1496",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/11",
            "value": 16889,
            "range": "± 942",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/11",
            "value": 36202,
            "range": "± 2593",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/13",
            "value": 17147,
            "range": "± 1077",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/13",
            "value": 43417,
            "range": "± 2539",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/15",
            "value": 20710,
            "range": "± 1309",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/15",
            "value": 50207,
            "range": "± 2917",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/8",
            "value": 969,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/8",
            "value": 1475,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/8",
            "value": 2563,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/16",
            "value": 1878,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/16",
            "value": 2839,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/16",
            "value": 6106,
            "range": "± 445",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/32",
            "value": 3579,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/32",
            "value": 5573,
            "range": "± 428",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/32",
            "value": 14711,
            "range": "± 1130",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/64",
            "value": 7191,
            "range": "± 1876",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/64",
            "value": 10517,
            "range": "± 510",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/64",
            "value": 39462,
            "range": "± 2678",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/8",
            "value": 988,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/8",
            "value": 1457,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/8",
            "value": 2551,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/16",
            "value": 1867,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/16",
            "value": 2846,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/16",
            "value": 6032,
            "range": "± 334",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/32",
            "value": 3592,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/32",
            "value": 5459,
            "range": "± 439",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/32",
            "value": 14292,
            "range": "± 668",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/64",
            "value": 7032,
            "range": "± 308",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/64",
            "value": 10598,
            "range": "± 708",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/64",
            "value": 37575,
            "range": "± 2003",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/8",
            "value": 789,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/8",
            "value": 1279,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/8",
            "value": 2434,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/16",
            "value": 1494,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/16",
            "value": 2427,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/16",
            "value": 5458,
            "range": "± 360",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/32",
            "value": 2786,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/32",
            "value": 4639,
            "range": "± 293",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/32",
            "value": 13775,
            "range": "± 1039",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/64",
            "value": 5429,
            "range": "± 424",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/64",
            "value": 8832,
            "range": "± 386",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/64",
            "value": 36041,
            "range": "± 1965",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/8",
            "value": 6559,
            "range": "± 432",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/8",
            "value": 2880,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/16",
            "value": 25624,
            "range": "± 1586",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/16",
            "value": 6653,
            "range": "± 403",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/32",
            "value": 114158,
            "range": "± 6833",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/32",
            "value": 15742,
            "range": "± 1137",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/64",
            "value": 612614,
            "range": "± 33610",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/64",
            "value": 39776,
            "range": "± 2439",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/8",
            "value": 4949,
            "range": "± 364",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/8",
            "value": 2964,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/16",
            "value": 16779,
            "range": "± 1115",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/16",
            "value": 6800,
            "range": "± 404",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/32",
            "value": 65220,
            "range": "± 4084",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/32",
            "value": 15821,
            "range": "± 899",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/64",
            "value": 320939,
            "range": "± 13930",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/64",
            "value": 40271,
            "range": "± 3466",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/8",
            "value": 5904,
            "range": "± 337",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/8",
            "value": 2822,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/16",
            "value": 23355,
            "range": "± 1396",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/16",
            "value": 6406,
            "range": "± 332",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/32",
            "value": 110527,
            "range": "± 8020",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/32",
            "value": 15080,
            "range": "± 943",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/64",
            "value": 595983,
            "range": "± 30050",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/64",
            "value": 38464,
            "range": "± 2349",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/8",
            "value": 988,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/8",
            "value": 931,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/16",
            "value": 1858,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/16",
            "value": 1827,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/32",
            "value": 3556,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/32",
            "value": 3539,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/64",
            "value": 6969,
            "range": "± 370",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/64",
            "value": 6971,
            "range": "± 380",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/8",
            "value": 1188,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/8",
            "value": 1263,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/16",
            "value": 2270,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/16",
            "value": 2358,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/32",
            "value": 4413,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/32",
            "value": 4520,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/64",
            "value": 8671,
            "range": "± 508",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/64",
            "value": 8812,
            "range": "± 487",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/8",
            "value": 1777,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/8",
            "value": 903,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/16",
            "value": 6876,
            "range": "± 328",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/16",
            "value": 1908,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/32",
            "value": 26385,
            "range": "± 1182",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/32",
            "value": 3752,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/64",
            "value": 102900,
            "range": "± 6032",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/64",
            "value": 8120,
            "range": "± 493",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal/8",
            "value": 2218,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal_optmized/8",
            "value": 2183,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal/16",
            "value": 5411,
            "range": "± 322",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal_optmized/16",
            "value": 5448,
            "range": "± 380",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal/32",
            "value": 12856,
            "range": "± 461",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal_optmized/32",
            "value": 13049,
            "range": "± 1037",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal/64",
            "value": 34417,
            "range": "± 1943",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal_optmized/64",
            "value": 34633,
            "range": "± 1872",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal/8",
            "value": 2907,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal_optmized/8",
            "value": 2039,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal/16",
            "value": 9341,
            "range": "± 415",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal_optmized/16",
            "value": 4596,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal/32",
            "value": 32041,
            "range": "± 3182",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal_optmized/32",
            "value": 10355,
            "range": "± 713",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal/64",
            "value": 116028,
            "range": "± 5437",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal_optmized/64",
            "value": 24637,
            "range": "± 1559",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal/8",
            "value": 2435,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal_optmized/8",
            "value": 2449,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal/16",
            "value": 5750,
            "range": "± 279",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal_optmized/16",
            "value": 5964,
            "range": "± 369",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal/32",
            "value": 14102,
            "range": "± 785",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal_optmized/32",
            "value": 14021,
            "range": "± 716",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal/64",
            "value": 36375,
            "range": "± 1606",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal_optmized/64",
            "value": 36879,
            "range": "± 1988",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal/8",
            "value": 1107,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal_optmized/8",
            "value": 1099,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal/16",
            "value": 2190,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal_optmized/16",
            "value": 2180,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal/32",
            "value": 4249,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal_optmized/32",
            "value": 4353,
            "range": "± 405",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal/64",
            "value": 8008,
            "range": "± 470",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal_optmized/64",
            "value": 8184,
            "range": "± 515",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal/8",
            "value": 1942,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal_optmized/8",
            "value": 1034,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal/16",
            "value": 7242,
            "range": "± 268",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal_optmized/16",
            "value": 2221,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal/32",
            "value": 27844,
            "range": "± 1676",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal_optmized/32",
            "value": 4346,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal/64",
            "value": 107419,
            "range": "± 7022",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal_optmized/64",
            "value": 8529,
            "range": "± 396",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal/8",
            "value": 1479,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal_optmized/8",
            "value": 1380,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal/16",
            "value": 2636,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal_optmized/16",
            "value": 2682,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal/32",
            "value": 5237,
            "range": "± 331",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal_optmized/32",
            "value": 5304,
            "range": "± 351",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal/64",
            "value": 10521,
            "range": "± 673",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal_optmized/64",
            "value": 10425,
            "range": "± 644",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giacomofenzi@outlook.com",
            "name": "Giacomo Fenzi",
            "username": "WizardOfMenlo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "994c89a8cc1143622835be82275bee99f8be9205",
          "message": "Merge pull request #21 from WizardOfMenlo/stab_chain",
          "timestamp": "2020-06-22T18:49:36+02:00",
          "tree_id": "beab8442c64dc9da3a76429a79fabd3cbb27f40c",
          "url": "https://github.com/WizardOfMenlo/stabchain/commit/994c89a8cc1143622835be82275bee99f8be9205"
        },
        "date": 1592847296790,
        "tool": "cargo",
        "benches": [
          {
            "name": "permutation__random_creation/default/8",
            "value": 337,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/16",
            "value": 651,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/32",
            "value": 1731,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/64",
            "value": 3575,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/128",
            "value": 7575,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/256",
            "value": 16717,
            "range": "± 263",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__random_creation/default/512",
            "value": 35550,
            "range": "± 698",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/8",
            "value": 179,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/8",
            "value": 245,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/16",
            "value": 215,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/16",
            "value": 322,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/32",
            "value": 273,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/32",
            "value": 375,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/64",
            "value": 407,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/64",
            "value": 571,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/128",
            "value": 677,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/128",
            "value": 913,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/256",
            "value": 1265,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/256",
            "value": 1777,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/default/512",
            "value": 2592,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inv_prod/prod_of_inv/512",
            "value": 3406,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__is_id",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/8",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/16",
            "value": 120,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/32",
            "value": 138,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/64",
            "value": 164,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/128",
            "value": 231,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/256",
            "value": 389,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__inverse/default/512",
            "value": 609,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/16",
            "value": 308,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/16",
            "value": 792,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/32",
            "value": 587,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/32",
            "value": 2295,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/64",
            "value": 1244,
            "range": "± 339",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/64",
            "value": 7728,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/128",
            "value": 2588,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/128",
            "value": 27117,
            "range": "± 381",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/256",
            "value": 6231,
            "range": "± 345",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/256",
            "value": 112536,
            "range": "± 1098",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/512",
            "value": 13681,
            "range": "± 284",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/512",
            "value": 431088,
            "range": "± 8572",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/pow/1024",
            "value": 29275,
            "range": "± 681",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__exp/multijoin/1024",
            "value": 1655851,
            "range": "± 18661",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/1",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/1",
            "value": 2042,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/3",
            "value": 6528,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/3",
            "value": 8535,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/5",
            "value": 9910,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/5",
            "value": 15024,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/7",
            "value": 12735,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/7",
            "value": 21497,
            "range": "± 274",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/9",
            "value": 13176,
            "range": "± 341",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/9",
            "value": 27974,
            "range": "± 287",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/11",
            "value": 16139,
            "range": "± 288",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/11",
            "value": 34492,
            "range": "± 945",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/13",
            "value": 16162,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/13",
            "value": 40916,
            "range": "± 349",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/pow/15",
            "value": 19022,
            "range": "± 612",
            "unit": "ns/iter"
          },
          {
            "name": "permutation__small_exp/multijoin/15",
            "value": 47383,
            "range": "± 579",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/8",
            "value": 973,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/8",
            "value": 1492,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/8",
            "value": 2629,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/16",
            "value": 1890,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/16",
            "value": 2891,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/16",
            "value": 6221,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/32",
            "value": 3608,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/32",
            "value": 5467,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/32",
            "value": 14427,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/orbit/64",
            "value": 7246,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/factored_transversal/64",
            "value": 10609,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_symmetric/transversal/64",
            "value": 37801,
            "range": "± 1484",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/8",
            "value": 984,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/8",
            "value": 1496,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/8",
            "value": 2596,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/16",
            "value": 1869,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/16",
            "value": 2861,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/16",
            "value": 6111,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/32",
            "value": 3610,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/32",
            "value": 5514,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/32",
            "value": 14637,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/orbit/64",
            "value": 7120,
            "range": "± 364",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/factored_transversal/64",
            "value": 10679,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_dihedral/transversal/64",
            "value": 38398,
            "range": "± 974",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/8",
            "value": 789,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/8",
            "value": 1303,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/8",
            "value": 2470,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/16",
            "value": 1507,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/16",
            "value": 2496,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/16",
            "value": 5860,
            "range": "± 309",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/32",
            "value": 2863,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/32",
            "value": 4742,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/32",
            "value": 13788,
            "range": "± 283",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/orbit/64",
            "value": 5569,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/factored_transversal/64",
            "value": 9160,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_factored_cyclic/transversal/64",
            "value": 36498,
            "range": "± 443",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/8",
            "value": 6247,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/8",
            "value": 2974,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/16",
            "value": 23190,
            "range": "± 363",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/16",
            "value": 6715,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/32",
            "value": 103699,
            "range": "± 6924",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/32",
            "value": 15833,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/factored_transversal/64",
            "value": 578228,
            "range": "± 10425",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_symmetric/transversal/64",
            "value": 40284,
            "range": "± 755",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/8",
            "value": 5141,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/8",
            "value": 3001,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/16",
            "value": 16912,
            "range": "± 547",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/16",
            "value": 6997,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/32",
            "value": 63588,
            "range": "± 6827",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/32",
            "value": 15985,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/factored_transversal/64",
            "value": 314869,
            "range": "± 3234",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_dihedral/transversal/64",
            "value": 40863,
            "range": "± 974",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/8",
            "value": 6045,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/8",
            "value": 2816,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/16",
            "value": 22944,
            "range": "± 321",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/16",
            "value": 6434,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/32",
            "value": 102993,
            "range": "± 1245",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/32",
            "value": 15136,
            "range": "± 554",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/factored_transversal/64",
            "value": 577714,
            "range": "± 25082",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_factored_cyclic/transversal/64",
            "value": 38919,
            "range": "± 741",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/8",
            "value": 1031,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/8",
            "value": 993,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/16",
            "value": 2000,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/16",
            "value": 1954,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/32",
            "value": 3735,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/32",
            "value": 3684,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit/64",
            "value": 7230,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete/orbit_optmized/64",
            "value": 7206,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/8",
            "value": 1189,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/8",
            "value": 1197,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/16",
            "value": 2299,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/16",
            "value": 2315,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/32",
            "value": 4441,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/32",
            "value": 4430,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit/64",
            "value": 8724,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_uncomplete/orbit_optmized/64",
            "value": 8838,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/8",
            "value": 1751,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/8",
            "value": 899,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/16",
            "value": 6912,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/16",
            "value": 1921,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/32",
            "value": 25987,
            "range": "± 284",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/32",
            "value": 3766,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit/64",
            "value": 100782,
            "range": "± 1641",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__orbit_vs_optmized_orbit_complete_many_gens/orbit_optmized/64",
            "value": 7464,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal/8",
            "value": 2236,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal_optmized/8",
            "value": 2190,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal/16",
            "value": 5552,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal_optmized/16",
            "value": 5587,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal/32",
            "value": 13107,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal_optmized/32",
            "value": 13162,
            "range": "± 900",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal/64",
            "value": 35275,
            "range": "± 534",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete/transversal_optmized/64",
            "value": 35257,
            "range": "± 564",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal/8",
            "value": 2812,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal_optmized/8",
            "value": 2066,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal/16",
            "value": 9719,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal_optmized/16",
            "value": 4747,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal/32",
            "value": 32918,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal_optmized/32",
            "value": 10587,
            "range": "± 330",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal/64",
            "value": 119778,
            "range": "± 1860",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_complete_many_gens/transversal_optmized/64",
            "value": 24925,
            "range": "± 478",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal/8",
            "value": 2631,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal_optmized/8",
            "value": 2524,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal/16",
            "value": 6066,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal_optmized/16",
            "value": 6162,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal/32",
            "value": 14157,
            "range": "± 346",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal_optmized/32",
            "value": 14231,
            "range": "± 310",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal/64",
            "value": 37105,
            "range": "± 360",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__transversal_vs_optmized_transversal_uncomplete/transversal_optmized/64",
            "value": 37183,
            "range": "± 545",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal/8",
            "value": 1140,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal_optmized/8",
            "value": 1104,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal/16",
            "value": 2251,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal_optmized/16",
            "value": 2199,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal/32",
            "value": 4322,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal_optmized/32",
            "value": 4339,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal/64",
            "value": 8335,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete/transversal_optmized/64",
            "value": 8330,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal/8",
            "value": 1962,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal_optmized/8",
            "value": 1067,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal/16",
            "value": 7427,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal_optmized/16",
            "value": 2243,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal/32",
            "value": 27335,
            "range": "± 3045",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal_optmized/32",
            "value": 4440,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal/64",
            "value": 105402,
            "range": "± 1301",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_complete_many_gens/transversal_optmized/64",
            "value": 8644,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal/8",
            "value": 1360,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal_optmized/8",
            "value": 1375,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal/16",
            "value": 2663,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal_optmized/16",
            "value": 2674,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal/32",
            "value": 5189,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal_optmized/32",
            "value": 5193,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal/64",
            "value": 9979,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "group__orbit__f_transversal_vs_optmized_f_transversal_uncomplete/transversal_optmized/64",
            "value": 10093,
            "range": "± 403",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}