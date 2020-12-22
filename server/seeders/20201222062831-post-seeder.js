'use strict';

const posts = [
  {
    title: 'Blog Post 1',
    author: 'Author 1',
    image_url: 'https://picsum.photos/600/400/?random',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Blog Post 2',
    author: 'Author 2',
    image_url: 'https://picsum.photos/600/400/?random',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Blog Post 3',
    author: 'Author 3',
    image_url: 'https://picsum.photos/600/400/?random',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Blog Post 4',
    author: 'Author 4',
    image_url: 'https://picsum.photos/600/400/?random',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Blog Post 5',
    author: 'Author 5',
    image_url: 'https://picsum.photos/600/400/?random',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Blog Post 6',
    author: 'Author 6',
    image_url: 'https://picsum.photos/600/400/?random',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Blog Post 7',
    author: 'Author 7',
    image_url: 'https://picsum.photos/600/400/?random',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Blog Post 8',
    author: 'Author 8',
    image_url: 'https://picsum.photos/600/400/?random',
    createdAt: new Date(),
    updatedAt: new Date()
  },
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Posts', posts);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
