window.BENCHMARK_DATA = {
  "lastUpdate": 1592320528104,
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
      }
    ]
  }
}