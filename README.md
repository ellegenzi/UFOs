# UFOs: Module 11 Challenge

## Overview of Project

### Background and Purpose

Dana is a data journalist who is at a point in her career where she has the freedom to choose the topics she wants to write about. When she's given the opportunity to write about her hometown, McMinnville, OR, she jumps on it for a couple of reasons. First, it's an opportunity to revisit the memories and people back home, but second, and the really fun part, is the topic - UFOs. McMinnville is famous for its sightings and even has an annual gathering of UFO enthusiasts. It’s a topic Dana has been interested in since she was a child, when she first heard about Farmer Trent's sighting back in 1950. For this assignment, the only thing she has to go on so far is a JavaScript file, filled to the brim with sighting information: countries, cities, states, type of sighting - there's a lot in this file! Thankfully, Dana is aware of JavaScript's visual functionality - it's a tried and true language after all. Her plan is to first use JavaScript to display the data as a table. However, because there is so much data, sifting through it without any adjustments would be a challenge. JavaScript provides a way to manipulate the data by adding filters. It's a little tricky to add more than one filter, but Dana is up to the challenge. Additionally, since she will be posting her article online, Dana wants to put everything together in a tidy HTML page: her article, a table of data to support her findings, and easy-to-use filters to fine-tune the results.

### Resources

- Data Sources: data.js
- Software: Visual Studio Code 1.68.1

## Results

### How to Perform a Search

Filtering the UFO sighting data is easy! A user can input search criteria to filter the data by date, city, state, country, and shape (see Figure 1 below).

*Figure 1: Search Filters*

![Search_Filter](https://user-images.githubusercontent.com/106830513/190948828-b3f5e27d-48f8-4c55-a4a5-041215cb2fc5.png)

If you wanted to search the data for UFO sightings that occurred on a particular date (for example, 1/7/2010), you would type that date into the field under where it says "Enter a Date," as shown in Figure 2.

*Figure 2: Search by Date*

![Search_by_Date](https://user-images.githubusercontent.com/106830513/190948798-7e9220f0-e81e-42a4-bf03-ceeffbf466e2.png)

You can also add a second criteria to a search. Figure 3 shows the data filtered to all sightings on 1/7/2010 that occurred in the state of Massachusetts (ma). In addition to the date, you would need to add the abbreviation for the state in the "Enter a State" field.

*Figure 3: Search by Date and State*

![Search_by_Date_State](https://user-images.githubusercontent.com/106830513/190948811-d3b5f51a-a016-4552-9cef-009ca5fc8b3c.png)

If you want to search for UFO sightings in a particular city, type that city name into the "Enter a City" field, as shown in Figure 4.

*Figure 4: Search by City*

![Search_by_City](https://user-images.githubusercontent.com/106830513/190948761-326d6851-d59f-46fc-894e-53b4ba1e4cd4.png)

You can also search the data for UFO sightings of a particular shape. Figure 5 shows the results for UFO sightings after typing "fireball" into the "Enter a Shape" field.

*Figure 5: Search by Shape*

![Search_by_Shape](https://user-images.githubusercontent.com/106830513/190948819-8dbf52a8-0260-45c1-adc4-2e36d7eebf0d.png)

Most sightings are in the US, but there are a couple of sightings in Canada. If you want to search by country, type the country abbreviation into the "Enter a Country" field. Figure 6 shows the results for UFO sightings in Canada.

*Figure 6: Search by Country*

![Search_by_Country](https://user-images.githubusercontent.com/106830513/190948782-a01aa9a9-c383-4b0c-9b29-6ba279f20719.png)

## Summary

### A Drawback

While testing the search filters, I noticed a flaw. A user would need to be very familiar with the data to be able to know which shapes UFO sightings could be categorized as or which cities have sightings. It would be helpful if there were dropdown menus of the available options for which there is data for each search criteria.

### Additional Recommendations

An additional recommendation for further development would be to add some contact information for Dana. This webpage is intended to be visited by those interested in reading Dana's article and it would be nice to have a way for them to leave a comment and/or contact Dana for a question.

A second recommendation would be to add a filter for the duration of a sighting. The data is already available for the current sightings on the site and it would be an easy add to the code. The dropdown menu options could be in ranges, such as these:

+ less than one minute
+ between 1 and 5 minutes
+ between 5 and 15 minutes
+ between 15 and 30 minutes
+ between 30-60 minutes
+ greater than one hour
