// this needs to end up creating a nested structure
// docs/READNME --> '/'
// docs/whatever.md --> '/whatever'
// docs/something/else.md --> '/something/else';

const _ = require('lodash');

exports.createUrlPath = (fileAbsolutePath, slug) => {
  const docsPath = fileAbsolutePath.slice(
    fileAbsolutePath.lastIndexOf('docs/')
  );

  const rootPath = docsPath.slice(
    docsPath.indexOf('/') + 1,
    docsPath.lastIndexOf('.')
  );

  if (rootPath.toLowerCase() === 'readme') {
    return '/';
  }

  const fileName = rootPath.slice(rootPath.lastIndexOf('/') + 1);
  const finalSlug = slug || _.kebabCase(fileName);

  if (rootPath.indexOf('/') > 0) {
    return `/${rootPath.slice(0, rootPath.lastIndexOf('/'))}/${finalSlug}`;
  }

  return finalSlug;
};
