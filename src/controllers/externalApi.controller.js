const externalApiService = require("../services/externalApi.service");
const { WeatherApiEndpoint } = require("../utils/constants/enpoints");
const initializeRedisClient = require("../utils/redis/redis");
const redisClient = require("../utils/redis/redis");
const { getCacheFromRedis, setCacheData } = require("../utils/redis/redisHelper");

//MANAGE Plan - Plan TABLE

exports.fetchExternalApi = async (req, res, next) => {
  try {
    const endpoint = WeatherApiEndpoint;
    // await subscriptionsService.getUserSubscriptionDetailsByIdPublic(req, res,next);
    let response = await getCacheFromRedis(req) //data from redis
    if(!response){
      response = await externalApiService.fetchDataFromAPI(endpoint);
      const cacheKey = req.originalUrl;
      await setCacheData(cacheKey,response)
      console.log('\x1b[34m%s\x1b[0m', "updated cache .");
      
    }
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};
