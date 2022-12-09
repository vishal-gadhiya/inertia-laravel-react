<?php

namespace App\Models\User\Traits\Method;

use App\Notifications\Auth\ResetPassword;
use App\Notifications\Auth\VerifyEmail;

/**
 * Class UserMethod.
 */
trait UserMethod
{
    /**
     * Send the password reset notification.
     *
     * @param  string  $token
     * @return void
     */
    public function sendPasswordResetNotification($token): void
    {
        $this->notify(new ResetPassword($token));
    }

    /**
     * Send the email verification notification.
     *
     * @return void
     */
    public function sendEmailVerificationNotification(): void
    {
        $this->notify(new VerifyEmail);
    }
}
