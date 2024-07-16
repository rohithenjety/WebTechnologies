<script>
$(document).ready(function() {
  // Function to fetch weather data based on user location
  function fetchWeather(location) {
    // Make AJAX request to a weather API (replace with actual API endpoint)
    $.ajax({
      url: 'https://api.weatherapi.com/v1/current.json',
      data: {
        key: 'YOUR_API_KEY',
        q: location
      },
      success: function(response) {
        // Update weatherInfo div with weather data
        $('#weatherInfo').html(`<h3>${response.location.name}</h3><p>Temperature: ${response.current.temp_c}°C</p><p>Condition: ${response.current.condition.text}</p>`);
      },
      error: function() {
        $('#weatherInfo').html('<p>Failed to fetch weather data.</p>');
      }
    });
  }

  // Example: Fetch weather data when the page loads
  fetchWeather('New York'); // Default location

  // Example: Handle form submission to update location
  $('#locationForm').submit(function(event) {
    event.preventDefault();
    const newLocation = $('#locationInput').val();
    fetchWeather(newLocation);
  });
});
</script>
