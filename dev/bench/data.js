window.BENCHMARK_DATA = {
  "lastUpdate": 1592057425729,
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
          "id": "66ba2aeccd6030b1ae1af10d83cb924a566e418a",
          "message": "Updated things to benchmark",
          "timestamp": "2020-06-12T23:04:01+02:00",
          "tree_id": "2eabd2ef12120052c314ec96e8d1a43873282c3c",
          "url": "https://github.com/WizardOfMenlo/stabchain/commit/66ba2aeccd6030b1ae1af10d83cb924a566e418a"
        },
        "date": 1591996381225,
        "tool": "cargo",
        "benches": [
          {
            "name": "random_creation/default/8",
            "value": 262,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "random_creation/default/16",
            "value": 489,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "random_creation/default/32",
            "value": 1298,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "random_creation/default/64",
            "value": 2621,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "random_creation/default/128",
            "value": 5413,
            "range": "± 449",
            "unit": "ns/iter"
          },
          {
            "name": "random_creation/default/256",
            "value": 12494,
            "range": "± 1102",
            "unit": "ns/iter"
          },
          {
            "name": "random_creation/default/512",
            "value": 27037,
            "range": "± 2272",
            "unit": "ns/iter"
          },
          {
            "name": "inv_prod/default/8",
            "value": 124,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "inv_prod/prod_of_inv/8",
            "value": 183,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "inv_prod/default/16",
            "value": 178,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "inv_prod/prod_of_inv/16",
            "value": 265,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "inv_prod/default/32",
            "value": 238,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "inv_prod/prod_of_inv/32",
            "value": 323,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "inv_prod/default/64",
            "value": 350,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "inv_prod/prod_of_inv/64",
            "value": 438,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "inv_prod/default/128",
            "value": 571,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "inv_prod/prod_of_inv/128",
            "value": 698,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "inv_prod/default/256",
            "value": 1071,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "inv_prod/prod_of_inv/256",
            "value": 1269,
            "range": "± 335",
            "unit": "ns/iter"
          },
          {
            "name": "inv_prod/default/512",
            "value": 1839,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "inv_prod/prod_of_inv/512",
            "value": 2438,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "is_id",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "inverse/default/8",
            "value": 64,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "inverse/default/16",
            "value": 85,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "inverse/default/32",
            "value": 106,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "inverse/default/64",
            "value": 128,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "inverse/default/128",
            "value": 167,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "inverse/default/256",
            "value": 259,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "inverse/default/512",
            "value": 408,
            "range": "± 30",
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
          "id": "fa4ca10702ed99f5915b798d7cfe31e3db83aa35",
          "message": "Random Elements Generator",
          "timestamp": "2020-06-12T21:04:04Z",
          "url": "https://github.com/WizardOfMenlo/stabchain/pull/7/commits/fa4ca10702ed99f5915b798d7cfe31e3db83aa35"
        },
        "date": 1592057425087,
        "tool": "cargo",
        "benches": [
          {
            "name": "random_creation/default/8",
            "value": 278,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "random_creation/default/16",
            "value": 534,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "random_creation/default/32",
            "value": 1463,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "random_creation/default/64",
            "value": 3097,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "random_creation/default/128",
            "value": 6485,
            "range": "± 426",
            "unit": "ns/iter"
          },
          {
            "name": "random_creation/default/256",
            "value": 14239,
            "range": "± 724",
            "unit": "ns/iter"
          },
          {
            "name": "random_creation/default/512",
            "value": 30568,
            "range": "± 1634",
            "unit": "ns/iter"
          },
          {
            "name": "inv_prod/default/8",
            "value": 141,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "inv_prod/prod_of_inv/8",
            "value": 211,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "inv_prod/default/16",
            "value": 192,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "inv_prod/prod_of_inv/16",
            "value": 277,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "inv_prod/default/32",
            "value": 241,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "inv_prod/prod_of_inv/32",
            "value": 344,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "inv_prod/default/64",
            "value": 358,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "inv_prod/prod_of_inv/64",
            "value": 500,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "inv_prod/default/128",
            "value": 584,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "inv_prod/prod_of_inv/128",
            "value": 786,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "inv_prod/default/256",
            "value": 1097,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "inv_prod/prod_of_inv/256",
            "value": 1408,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "inv_prod/default/512",
            "value": 2025,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "inv_prod/prod_of_inv/512",
            "value": 2649,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "is_id",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "inverse/default/8",
            "value": 77,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "inverse/default/16",
            "value": 97,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "inverse/default/32",
            "value": 100,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "inverse/default/64",
            "value": 150,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "inverse/default/128",
            "value": 209,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "inverse/default/256",
            "value": 323,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "inverse/default/512",
            "value": 499,
            "range": "± 37",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}