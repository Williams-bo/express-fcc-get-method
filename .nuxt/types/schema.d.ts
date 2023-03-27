import { NuxtModule } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["apollo"]?: typeof import("@nuxtjs/apollo").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["gtag"]?: typeof import("nuxt-gtag").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["security"]?: typeof import("nuxt-security").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["nuxt-config-schema"]?: typeof import("nuxt-config-schema").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/apollo", NuxtConfig["apollo"]] | ["nuxt-gtag", NuxtConfig["gtag"]] | ["nuxt-security", NuxtConfig["security"]] | ["@nuxtjs/tailwindcss", NuxtConfig["tailwindcss"]] | ["nuxt-config-schema", NuxtConfig["nuxt-config-schema"]] | ["@nuxt/telemetry", NuxtConfig["telemetry"]])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   private: {
      basicAuth: boolean,
   },

   security: {
      headers: {
         crossOriginResourcePolicy: string,

         crossOriginOpenerPolicy: string,

         crossOriginEmbedderPolicy: string,

         contentSecurityPolicy: {
            "base-uri": Array<string>,

            "font-src": Array<string>,

            "form-action": Array<string>,

            "frame-ancestors": Array<string>,

            "img-src": Array<string>,

            "object-src": Array<string>,

            "script-src-attr": Array<string>,

            "style-src": Array<string>,

            "upgrade-insecure-requests": boolean,

            "script-src": Array<string>,
         },

         originAgentCluster: string,

         referrerPolicy: string,

         strictTransportSecurity: {
            maxAge: number,

            includeSubdomains: boolean,
         },

         xContentTypeOptions: string,

         xDNSPrefetchControl: string,

         xDownloadOptions: string,

         xFrameOptions: string,

         xPermittedCrossDomainPolicies: string,

         xXSSProtection: string,

         permissionsPolicy: {
            camera: Array<string>,

            "display-capture": Array<string>,

            fullscreen: Array<string>,

            geolocation: Array<string>,

            microphone: Array<string>,
         },
      },

      requestSizeLimiter: {
         maxRequestSizeInBytes: number,

         maxUploadFileRequestInBytes: number,

         throwError: boolean,
      },

      rateLimiter: {
         tokensPerInterval: number,

         interval: string,

         fireImmediately: boolean,

         throwError: boolean,
      },

      xssValidator: {
         throwError: boolean,
      },

      corsHandler: {
         origin: string,

         methods: Array<string>,

         preflight: {
            statusCode: number,
         },

         throwError: boolean,
      },

      allowedMethodsRestricter: string,

      hidePoweredBy: boolean,

      enabled: boolean,

      csrf: boolean,
   },
  }
  interface PublicRuntimeConfig {
   gtag: {
      id: string,

      config: any,
   },
  }
}