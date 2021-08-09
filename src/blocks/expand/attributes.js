const attributes = {
  block_id: {
    type: "string",
  },
  blockTitle: {
    type: "string",
    default: "Title for this block",
  },
  expandLessText: {
    type: "string",
    default: "Some short text that can be expanded to show more details.",
  },
  expandMoreText: {
    type: "string",
    default:
      "Some short text that can be expanded to show more details. Description for this block. Use this space for describing your block. Any text will do. Description for this block. You can use this space for describing your block.",
  },
  moreLabel: {
    type: "string",
    default: "Show more",
  },
  lessLabel: {
    type: "string",
    default: "Show less",
  },
  showTitle: {
    type: "boolean",
    default: true,
  },
  expandAlignment: {
    type: "string",
  },
  textColor: {
    type: "string",
  },
  linkColor: {
    type: "string",
  },
  titleColor: {
    type: "string",
  },
  titleSpace: {
    type: "number",
    default: 28,
  },
  textSpace: {
    type: "number",
    default: 20,
  },
  linkSpace: {
    type: "number",
    default: 18,
  },
  titleSpaceMobile: {
    type: "number",
    default: 28,
  },
  textSpaceMobile: {
    type: "number",
    default: 20,
  },
  linkSpaceMobile: {
    type: "number",
    default: 18,
  },
  titleSpaceTablet: {
    type: "number",
    default: 28,
  },
  textSpaceTablet: {
    type: "number",
    default: 20,
  },
  linkSpaceTablet: {
    type: "number",
    default: 18,
  },
  titleFontFamily: {
    type: "string",
  },
  textFontFamily: {
    type: "string",
  },
  linkFontFamily: {
    type: "string",
  },
  titleFontSize: {
    type: "number",
    default: 20,
  },
  titleFontWeight: {
    type: "number",
    default: 400,
  },
  titleLineHeight: {
    type: "number",
    default: 1,
  },
  textFontSize: {
    type: "number",
    default: 16,
  },
  textFontWeight: {
    type: "number",
    default: 400,
  },
  textLineHeight: {
    type: "number",
    default: 2,
  },
  linkFontSize: {
    type: "number",
    default: 16,
  },
  linkFontWeight: {
    type: "number",
    default: 400,
  },
  linkLineHeight: {
    type: "number",
    default: 1,
  },
  titleFontSizeMobile: {
	type: "number",
  },
  titleFontSizeTablet: {
	type: "number",
  },
  textFontSizeMobile: {
	type: "number",	  
  },
  textFontSizeTablet: {
	type: "number",	  
  },
  linkFontSizeMobile: {
	type: "number",	  
  },
  linkFontSizeTablet: {
	type: "number",	  
  },
};
export default attributes;
