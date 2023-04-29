import date from "date-and-time";

export default (data: any) => ({
  validity_end: date.format(new Date(data.validity_start), "MM.DD.YYYY"),
  state_description: data.state_description,
});
