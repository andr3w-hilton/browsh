export default {
  ttyCell: function (fg_colour, bg_colour, character) {
    fg_colour = fg_colour || [255, 255, 255];
    bg_colour = bg_colour || [0, 0, 0];
    let cell = fg_colour.concat(bg_colour);
    cell.push(character);
    return cell;
  },

  ttyPlainCell: function (character) {
    return this.ttyCell(null, null, character);
  },

  rebuildArgsToSingleArg: function (args) {
    return args.slice(1).join(',');
  }
}