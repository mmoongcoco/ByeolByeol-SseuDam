package com.app.byeolbyeolsseudam.repository.order;

import com.app.byeolbyeolsseudam.entity.order.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long>, OrderCustomRepository {
}
