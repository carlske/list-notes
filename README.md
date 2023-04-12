# List Notes

  

## Overview

  

Feature-Sliced Design (FSD) is an architectural methodology for scaffolding front-end applications. Simply put, it's a compilation of rules and conventions on organizing code. The main purpose of this methodology is to make the project more understandable and structured in the face of ever-changing business requirements.

  

The layers are standardized across all projects and vertically arranged. Modules on one layer can only interact with modules from the layers strictly below. There are currently seven of them (bottom to top):

  

> shared — reusable functionality, detached from the specifics of the
> project/business.(e.g. UIKit, libs, API)
> 
> entities — business entities.(e.g., User, Product, Order)
> 
> features — user interactions, actions that bring business value to the
> user.(e.g. SendComment, AddToCart, UsersSearch)
> 
> widgets — compositional layer to combine entities and features into
> meaningful blocks.(e.g. IssuesList, UserProfile)
> 
> pages — compositional layer to construct full pages from entities,
> features and widgets.
> 
> processes — complex inter-page scenarios. (e.g., authentication)
> 
> app — app-wide settings, styles and providers.
