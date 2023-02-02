<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'Test User',
            'admin' => 0,
            'email' => 'test@example.com',
            'password' => bcrypt('secret'),
        ]);

        \App\Models\Cart::factory()->create([
            'user_id' => 1,
            'amount' => 0,
            'total' => 0,
        ]);

        \App\Models\Product::factory()->create([
            'type' => 'electronic',
            'name' => 'MacBook Air M1',
            'price' => 1326.99,
            'stock' => 6,
            'desc' => 'Laptop computer.',
            'img' => '/storage/imgs/products/laptop.jpg',
        ]);

        \App\Models\Product::factory()->create([
            'type' => 'electronic',
            'name' => 'MacBook Air M2',
            'price' => 1349.99,
            'stock' => 8,
            'desc' => 'Laptop computer.',
            'img' => '/storage/imgs/products/laptop1.jpg',
        ]);
        
        \App\Models\Product::factory()->create([
            'type' => 'electronic',
            'name' => 'Macbook Pro',
            'price' => 1245.99,
            'stock' => 3,
            'desc' => 'Laptop computer.',
            'img' => '/storage/imgs/products/laptop2.jpg',
        ]);

        \App\Models\Product::factory()->create([
            'type' => 'electronic',
            'name' => 'Microsoft Surface',
            'price' => 1432.99,
            'stock' => 2,
            'desc' => 'Laptop computer.',
            'img' => '/storage/imgs/products/laptop3.jpg',
        ]);

        \App\Models\Product::factory()->create([
            'type' => 'electronic',
            'name' => 'Lenovo',
            'price' => 4321.99,
            'stock' => 2,
            'desc' => 'Laptop computer.',
            'img' => '/storage/imgs/products/laptop4.jpg',
        ]);
        
    }
}
