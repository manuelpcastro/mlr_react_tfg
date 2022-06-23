import { useMemo } from "react"

const NN = [
  {
    id: "n_neighbors",
    title: "Neighbours",
    type: "int",
    default: 5,
  },
  {
    id: "weights",
    title: "Weights",
    type: "select",
    values: ["uniform", "distance", "callable"],
    default: "uniform",
  },
  {
    id: "algorithm",
    title: "Algorithm",
    type: "select",
    values: ["auto", "ball tree", "kd tree", "brute"],
    default: "auto",
  },
  {
    id: "p",
    title: "Pint",
    type: "int",
    default: 2,
  },
  {
    id: "metric",
    title: "Metric",
    type: "select",
    values: ["euclidean", "manhattan", "chebyshev", "minkowski", "wminkowski", "seuclidean", "mahalanobis"],
    default: "minkowski",
  },
  {
    id: "n_jobs",
    title: "Jobs",
    type: "int",
    default: 1,
  },
]

const DecisionTree = [
  {
    id: "criterion",
    title: "Criterion",
    type: "select",
    values: ["gini", "entropy"],
    default: "gini",
  },
  {
    id: "splitter",
    title: "Splitter",
    type: "select",
    values: ["best", "random"],
    default: "best",
  },
  {
    id: "max_depth",
    title: "Maximum depth",
    type: "int",
    default: null,
  },
  {
    id: "min_samples_split",
    title: "Minimum number of samples to split",
    type: "int",
    default: 2,
  },
  {
    id: "min_samples_leaf",
    title: "Minimum number of samples to be at leaf node",
    type: "int",
    default: 1,
  },
  {
    id: "min_weight_fraction_leaf",
    title: "Minimum weighted fraction to be at leaf node",
    type: "int",
    default: 0,
  },
]

// TO DO: change to an API call?
const useModelParameters = ({ model }) => useMemo(() => {
  if (model === "NN") {
    return NN
  }

  if (model === "DecisionTree") {
    return DecisionTree
  }

  return []
}, [model])

export default useModelParameters
