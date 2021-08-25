Proyecto Kubernetes y NodeJS
========================================

# Overview

A fin de que han pedido un ejemplo sencillo de uso de Kubernetes y ver los valores de todos los nodos les dejo un ejemplo de un servicio. A partir de allí pueden ir solos ya que se puede ver a grandes rasgos los valores que van a otorgar en cada caso.

# App sample API sample

En este ejemplo se inicia una servicio por medio de express,el cual toma los valores de referencia que se pasan por variables de ambiente las cual va a utilizar dentro de la app a modo de ejemplo

# En un primer ejemplo se utilizo Consul

En este escenario aporto las configuraciones basicas de registro faltan las de comunicación. Aunque para el uso de LB quedo por medio de Haproxy y en cuento al discovery de no encontrar algo mejor que consul por ahora sigue siendo consul una alternativa.

# En este escenario se realiza un una arquitectura Kubernetes

* Cluster kubernetes, con 3 nodos master y 3 nodos workers.
* Ha balancer para Kubernetes a finde que los nodos master consulten siempre al LB.
* En cuanto al Ingress se trabajo por medio de nginx-ingress es software libre y su utilidad para fines didacticos es bueno, sin embargo resulto mucho mejor que el proyecto haproxy ingress. Ademas soporta multiplotol por medio de configmaps.
* Otro HA balancer independiente para manejar el discovery service por medio de DNS fuera de consul. Esto es independiente por parte de la capa de INFRA. La inverción de control de infra esta incompleta por ahora en cuento a las apps, de todas formas aqui es el debate actual. Tener un patron sidecar simplemene para esta discovery me parece que esto aún se puede mejorar más.
* Se encuentra aplicado el caso de uso de registry docker privado para Kubernetes, desde la cual Kubernetes va a tomar la imagen para hacer el deployment.

# ¿Qué hace la app?

Simplemente inicia el servicio e imprime los detalles de las variables de ambiente con los cuales trabaja. Es con fines didacticos y a mejorar.

# Configuración

* config-kubernetes, es un directorio con los datos suficientes para hacer el deploy, service y realizar el ingress correctamente.
* nodejs, es la app con el servicio para las pruebas.
