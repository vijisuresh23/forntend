const API_HOST_LOCAL = "http://localhost:8080";
const API_HOST_CI = "https://123.45.67.89";
const API_HOST_STAGING = "https://shows.staging/service";

const UI_HOST_LOCAL = "https://localhost:3000";
const UI_HOST_CI = "https://shows.shows.ci";
const UI_HOST_STAGING = "https://shows.staging";

const ENV_LOCAL = "ENV_LOCAL"
const ENV_CI = "ENV_CI"
const ENV_STAGING = "ENV_STAGING"

const HOSTS = {
  ENV_LOCAL : {
    "API": API_HOST_LOCAL,
    "UI": UI_HOST_LOCAL
  },
  ENV_CI : {
    "API": API_HOST_CI,
    "UI": UI_HOST_CI
  },
  ENV_STAGING : {
    "API": API_HOST_STAGING,
    "UI": UI_HOST_STAGING
  },
};

export const serviceUrl = () => {
  const environment = process.env.ENVIRONMENT || ENV_LOCAL;
  return HOSTS[environment].API
}

export const urls = {
  service:  serviceUrl()
};

export const featureToggles = {
    dummy : true
}
