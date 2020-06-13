window.BENCHMARK_DATA = {
  "lastUpdate": 1592068005467,
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
      }
    ]
  }
}
