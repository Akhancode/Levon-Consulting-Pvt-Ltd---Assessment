const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const sourceSubSchema = new mongoose.Schema(
  {
    region: {
      required: true,
      type: String,
      index: true,
      unique: true,
    },
    state: {
      required: true,
      type: String,
    },
    latitude: {
      type: String,
    },
    longitude: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const originSubSchema = new mongoose.Schema(
  {
    portName: {
      required: true,
      type: String,
    },
    portCode: {
      type: String,
    },
    cfsStation: {
      required: true,
      type: String,
    },
    city: {
      required: true,
      type: String,
    },
    state: {
      required: true,
      type: String,
    },
    latitude: {
      type: String,
    },
    longitude: {
      type: String,
    },
    imageUrl: {
      required: false,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const destinationLinkedOriginSubSchema = new mongoose.Schema({
  originPortName: {
    required: true,
    type: String,
  },
  _originId: {
    required: true,
    type: String,
  },
});

const destinationSubSchema = new mongoose.Schema(
  {
    portName: {
      required: true,
      type: String,
    },
    portCode: {
      type: String,
    },
    country: {
      required: true,
      type: String,
    },
    latitude: {
      type: String,
    },
    longitude: {
      type: String,
    },
    imageUrl: {
      required: false,
      type: String,
    },
    linkedOrigin: [destinationLinkedOriginSubSchema],
  },
  {
    timestamps: true,
  }
);

const locationSchema = new mongoose.Schema({
  source: [sourceSubSchema],
  origin: [originSubSchema],
  destination: [destinationSubSchema],
});

locationSchema.set("collection", "locations");
module.exports = mongoose.model("location", locationSchema);
