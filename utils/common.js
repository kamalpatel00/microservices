const paginatedObj = (options) => {
    const sort = {};
    if (options.sortBy) {
      const str = options.sortBy.split(':');
      sort["createdAt"] = str[0] === 'desc' ? -1 : 1;
    } else {
      sort.createdAt = 1;
    }
    const page = parseInt(options.page, 10) || 1;
    const limit = parseInt(options.limit, 10) || 10;
    const returnObj = {
      sort,
      page,
      limit,
    };
  
    return returnObj;
  };

  module.exports = {
    paginatedObj
  }