package com.ilieilie.haus.controllers;

import com.ilieilie.haus.models.Rental;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by lucian on 25/07/2017.
 */
@RestController
@RequestMapping("/api")
public class RentalController {

    @RequestMapping("/rentals")
    public List<Rental> getRentalList() {
        List<Rental> rentals = new ArrayList<>();

        Rental rental1 = new Rental();
        rental1.setTitle("Rental 1");
        rental1.setDescription("Description for rental 1");
        rental1.setPrice(new BigDecimal(350));
        rental1.setCurrency("EUR");
        rental1.setImageURI("https://www.regatta.ro/images/400x400/media/casa-de-vanzare-4-camere-zona-pipera-aviatiei-bucuresti-145-mp-rgt32220-1.jpg");
        rentals.add(rental1);

        return rentals;
    }
}
