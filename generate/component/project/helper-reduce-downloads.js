export function helperReduceDownloads(data, repo) {
  const {packagesByRepo, packageByName} = data

  return packagesByRepo[repo].reduce(sum, 0)

  function sum(all, d) {
    return all + (packageByName[d].downloads || 0)
  }
}
