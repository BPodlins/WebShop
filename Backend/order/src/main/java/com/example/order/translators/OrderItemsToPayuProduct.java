package com.example.order.translators;

import com.example.order.entity.OrderItems;
import com.example.order.entity.PayUProduct;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

public abstract class OrderItemsToPayuProduct {
    public PayUProduct toPayuProduct(OrderItems orderItems){
        return translate(orderItems);
    }


    @Mappings({
            @Mapping(source = "priceUnit",target = "unitPrice")
    })
    protected abstract PayUProduct translate(OrderItems orderItems);
}
