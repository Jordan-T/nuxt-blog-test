module.exports = () => {
  const data = {
    users: [],
    categories: [],
    posts: [],

    // @TODO: remove after
    people: require('./people.json').people
  };


  const baseFakeImageThemes = [
    'nemo',
    'futurama',
    'rio',
    'simpsons',
    'up',
  ];
  const getFakeImage = function(i, width = 800, height = 600, themes = baseFakeImageThemes) {
    const nbImages = 9;
    const startImage = 1;

    const currentTheme = themes[i % themes.length];
    const currentImage = Math.floor(i / themes.length) % nbImages + startImage;

    return `http://lorempicsum.com/${currentTheme}/${width}/${height}/${currentImage}`;
  };

  const fakePortrait = function(i, size = null, genders = ['men', 'women']) {
    const nbImages = 100;
    const startImage = 0;

    const currentGender = genders[i % genders.length];
    const currentImage = Math.floor(i / genders.length) % nbImages + startImage;
    const sizeUrl = ['med', 'thumb'].indexOf(size) !== -1 ? `${size}/` : '';

    return `https://randomuser.me/portraits/${sizeUrl}${currentGender}/${currentImage}.jpg`
  };


  // Create 25 users
  for (let i = 0; i < 25; i++) {
    data.users.push({
      id: i,
      name: `User ${i}: name`,
      picture: {
        large: fakePortrait(i),
        medium: fakePortrait(i, 'med'),
        thumbnail: fakePortrait(i, 'thumb'),
      },
      order: i,
    });
  }

  // Create 2 categories
  for (let i = 0; i < 2; i++) {
    data.categories.push({
      id: i,
      title: `Category ${i}: title`,
      description: `Category ${i}: description`,
      order: i,
    });
  }

  // Create 20 Posts
  for (let i = 0; i < 20; i++) {
    data.posts.push({
      id: i,
      title: `Posts ${i}: title`,
      description: `Posts ${i}: description`,
      picture: {
        original: getFakeImage(i, 1900, 1080),
        large: getFakeImage(i, 800, 600),
        medium: getFakeImage(i, 300, 200),
        thumbnail: getFakeImage(i, 75, 75),
      },
      order: i,
    });
  }

  return data
};