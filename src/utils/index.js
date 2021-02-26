import moment from "moment";

export function format_fecha(v) {
  return moment(v).format('DD/MM/YYYY')
}

export function open_tab(url) {
  const win = window.open(url, '_blank');
  win.focus();
}