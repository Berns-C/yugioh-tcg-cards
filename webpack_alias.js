const path = require('path');

module.exports = {
  '@Assets': path.resolve(__dirname, 'src/assets/'),
  '@Components': path.resolve(__dirname, 'src/components/'),
  '@Contexts': path.resolve(__dirname, 'src/contexts/'),
  '@Data': path.resolve(__dirname, 'src/data/'),
  '@Hooks': path.resolve(__dirname, 'src/hooks/'),
  '@Layouts': path.resolve(__dirname, 'src/layouts/'),
  '@Library': path.resolve(__dirname, 'src/lib/'),
  '@Pages': path.resolve(__dirname, 'src/pages/'),
  '@Redux': path.resolve(__dirname, 'src/services/redux/'),
  '@Routes': path.resolve(__dirname, 'src/routes/'),
  '@Services': path.resolve(__dirname, 'src/services/api/'),
  '@Utils': path.resolve(__dirname, 'src/utils/'),
};
