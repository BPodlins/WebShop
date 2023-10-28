FROM openjdk:21

WORKDIR /app

COPY eureka/target/eureka.jar eureka.jar
COPY auth/target/auth.jar auth.jar
COPY basket/target/basket.jar basket.jar
COPY file-service/target/file-service.jar file-service.jar
COPY gateway/target/gateway.jar gateway.jar
COPY order/target/order.jar order.jar
COPY product-service/target/product-service.jar product-service.jar
COPY RegisterEndpointInformation/target/RegisterEndpointInformation.jar RegisterEndpointInformation.jar

CMD ["java", "-jar", "gateway.jar"]
