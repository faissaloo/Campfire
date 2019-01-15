function toTitleCase(toTransform) {
  return toTransform.replace(/\b([a-z])/g, function (_, initial) {
      return initial.toUpperCase();
  });
}

export default class Artist {
  constructor(name, wikipage, bandcampsearch) {
    this.name = name
    this.wikipage = wikipage
    this.bandcampsearch = bandcampsearch
  }

  //Parse the wikipedia page
  genres() {
    let genreListGetter = /genre[\s]*=[\s]*(.*?(?:\n\|))/sm;

    //This is why safe navigation operators exist
    if (!
      (
        this.wikipage
        && this.wikipage.query
        && this.wikipage.query.pages
        && this.wikipage.query.pages[0]
        && this.wikipage.query.pages[0].revisions
        && this.wikipage.query.pages[0].revisions[0]
        && this.wikipage.query.pages[0].revisions[0].content
      )
    ) {
      return [];
    }

    let matches = this.wikipage.query.pages[0].revisions[0].content.match(genreListGetter);
    if (!matches || matches.length<2) {return []}
    let rawGenres = matches[1]
    let genreFinder = /\[\[([A-Za-z\- ]+)\]\]|\|([A-Za-z\- ]+)\]\]/g;
    let genres = [];

    let match = genreFinder.exec(rawGenres);
    while (match != null) {
      if (match[1] !== undefined) {
        genres.push(toTitleCase(match[1]));
      } else {
        genres.push(toTitleCase(match[2]));
      }
      match = genreFinder.exec(rawGenres);
    }

    return genres;
  }
};
