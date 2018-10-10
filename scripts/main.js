var wheelbase = Wheelbase({
  accountId: youputyouraccountidhere,
  urlParams: true
});

var resultsTemplate = document.getElementById("result-template").innerHTML;
var unavailableTemplate = document.getElementById("unavailable-result-template").innerHTML;

wheelbase.addWidget(wheelbase.widgets.RentalList, "rental-results", {
  template: resultsTemplate,
  unavailable: unavailableTemplate, // optional, will just hide unavailable results if no template provided
  cssClasses: {
      root: "custom-result-container",
      singleItem: "custom-result"
  }
});

// now lets add the search widgets
wheelbase.addWidget(wheelbase.widgets.TypeList, "vehicle-type", {
  cssClasses: {
      root: "rental-type"
  }
});

// to simplify the process, we'll stop including custom classes, but all
// widgets support them
wheelbase.addWidget(wheelbase.widgets.PriceRange, "vehicle-price");
wheelbase.addWidget(wheelbase.widgets.DateRange, "date-container");

wheelbase.start();
