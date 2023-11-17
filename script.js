
    function timeConverterMain(){
        selectElement = document.querySelector('#convertTo');
        convertTo = selectElement.options[selectElement.selectedIndex].value;
        convertMe = document.getElementById("timeToConvert").value;
        //console.log(convertTo);
        //console.log(convertMe);
        timeConverter(convertMe, convertTo);
        return false;
      }
      
      function timeConverter(convertMe, convertTo){
        switch(convertTo){
          case "minsToDays":
            converted = convertMinsToDays(convertMe);
            console.log(converted);
            document.querySelector('#result').textContent = converted;
            break;
          case "hoursToWeeks":
            converted = convertHoursToWeeks(convertMe);
            console.log(converted);
            document.querySelector('#result').textContent = converted;
            break;
          case "daysToMonths":
            converted = convertDaystoMonths(convertMe);
            console.log(converted);
            document.querySelector('#result').textContent = converted;
            break;
          case "secsToHours":
            converted = convertSecondsToHours(convertMe);
            console.log(converted);
            document.querySelector('#result').textContent = converted;
            break;
          case "monthsToDecs":
            converted = convertMonthsToDecades(convertMe);
            console.log(converted);
            document.querySelector('#result').textContent = converted;
            break;
          case "weeksToYears":
            converted = convertWeeksToYears(convertMe);
            console.log(converted);
            document.querySelector('#result').textContent = converted;
            break;
          default:
            console.log("Did you enter a day, hour, minute, or second?");
        }
        //console.log("Hi");
      } 
      
      
      //Convert minutes to days, hours and minutes
      function convertMinsToDays(a){
        var days = Math.floor(a/1440); //1440 minutes in a day (60*24)
        var hours = Math.floor((a%1440)/60); //60 mins in an hour
        var minutes = a-((days*1440)+(hours*60)); //remainder
        return a + " minute(s) = " +days+ " day(s), " +hours + ' hour(s) and ' + minutes + " minute(s).";
      }
      
      //console.log(convertMins(121));
      
      //Convert days to months, weeks and days
      function convertDaystoMonths(a){
        var months = Math.floor(a/30);//30 days in a month
        var weeks = Math.floor((a%30)/7); //7 days in a week
        var days = a-((months*30)+(weeks*7)); //remainder
        return a + " days(s) = " +months+ " month(s), " +weeks + ' week(s) and ' + days + " day(s).";  
      }
      
      //console.log(convertDays(99));
      
      
      //Convert hours to weeks, days and hours
      function convertHoursToWeeks(c){
        var weeks = Math.floor(c/(168));//168 hours in a week (24*7)
        var days = Math.floor((c%168)/24);//24 hours in a day
        var hours = c-((weeks*168)+(days*24)); //remainder
        return c + " hour(s) = " +weeks+ " week(s), " +days + ' day(s) and ' + hours + " hour(s).";  
      }
      
      //console.log(convertHours(121));
      
      //Convert seconds to hours, minutes and seconds
      function convertSecondsToHours(d){
        var hours = Math.floor(d/3600); //3600 seconds in an hour
        var minutes =  Math.floor((d%3600)/60);//60 seconds in a minute
        var seconds = d-((hours*3600)+(minutes*60)); //remainder
        return d + " second(s) = " +hours+ " hour(s), " +minutes+ " minute(s) and " +seconds+ " second(s).";
      }
      //console.log(convertSeconds(63));
      

      //Convert months to decades, years, months
      function convertMonthsToDecades(f){
        var decades = Math.floor(f/120); //120 months in an decade;
        var years = Math.floor((f%120)/12);//12 months in a year
        var months = f-((decades*120)+(years*12)); //remainder
        return f + " month(s) = " +decades+ " decade(s), " +years+ " year(s) and " +months+ " month(s).";
      }

      //Convert weeks to years, months, weeks
      function convertWeeksToYears(f){
        var years = Math.floor(f/52); //52 weeks in a year
        var months = Math.floor((f%52)/4);//4 weeks in a month
        var weeks = f-((years*52)+(months*4)); //remainder
        return f + " weeks(s) = " +years+ " year(s), " +months+ " month(s) and " +weeks+ " week(s).";
      }      