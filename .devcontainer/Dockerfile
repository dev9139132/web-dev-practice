FROM php:8.2-apache

# Install MySQL server and PHP-MySQL extension
RUN apt-get update && apt-get install -y \
    default-mysql-server \
    && docker-php-ext-install mysqli

RUN a2enmod rewrite
