import Director from "./director";
import HttpBuilder from "./gethttpbuilder";

const builder = new HttpBuilder();
Director.buildGetHttp(builder);
const getHttpRequest = builder.getResult();
console.log({ getHttpRequest });

Director.buildPostHttp(builder);
const postHttpRequest = builder.getResult();
console.log({ postHttpRequest });
