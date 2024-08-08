const express = require('express');
const AWS = require('aws-sdk');
const cors = require('cors');
const app = express();
const port = 8080;

// Configure AWS SDK
AWS.config.update({
    region: 'us-west-2'
});

const docClient = new AWS.DynamoDB.DocumentClient();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Endpoint to add user location
app.post('/addLocation', (req, res) => {
    const { location } = req.body;
    // Mock function to get coordinates based on location name
    const coordinates = getLocationCoordinates(location);

    const params = {
        TableName: 'UserLocations',
        Item: {
            location: location,
            lat: coordinates.lat,
            lng: coordinates.lng
        }
    };

    docClient.put(params, (err, data) => {
        if (err) {
            console.error('Unable to add location. Error JSON:', JSON.stringify(err, null, 2));
            res.status(500).send(err);
        } else {
            console.log('Added location:', JSON.stringify(data, null, 2));
            res.send(coordinates);
        }
    });
});

// Function to get coordinates from location name (mock implementation)
function getLocationCoordinates(location) {
    // Mock coordinates for demonstration purposes
    return {
        lat: -25.2744,
        lng: 133.7751
    };
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
