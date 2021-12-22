import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer qp8AIj94oy70cyu5Rgyzq__Vo3rheraE9C30PEyMVCfE26YHDRL09LsI-n2P5VdcvQiqejARcv86AV1p5ggvdeWIb9la1eofokZwQ0hv2sqHS3auRJbuIEnYA2oBXnYx"
  }
});
