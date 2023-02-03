<?php

use App\Http\Controllers\AddressController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\PagesController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ItemController;

use App\Models\Cart;
use App\Models\Item;
use App\Models\Product;

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/products', [PagesController::class, 'index'])->name('index');
Route::get('/', [PagesController::class, 'about'])->name('about');
Route::get('/team', [PagesController::class, 'team'])->name('team');
Route::get('/pictures', [PagesController::class, 'pictures'])->name('pictures');

Route::get('/dashboard/products', function () {
    $cart = Cart::all();
    $items = Item::all();
    $products = Product::all();
    return Inertia::render('Products')->with(['products' => $products, 'items' => $items, 'cart' => $cart]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::post('/item/delete', [ItemController::class, 'delete'])->name('item.delete');

Route::resources([
    'checkout' => CheckoutController::class,
    'address' => AddressController::class,
    'appointment' => AppointmentController::class,
    'cart' => CartController::class,
    'payment' => PaymentController::class,
    'product' => ProductController::class,
    'item' => ItemController::class,
]);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
