import Http from "./http";

export default interface IHttpBuilder {
	setUrl(url: string): Http;
	setHeader(headerOpts: { [key: string]: string }): Http;
	setBody(bodyOpts: {}): Http;
	setMethod(method: "GET" | "POST" | "PUT" | "DELETE"): Http;
}
